import { useState } from "react";
import { questions } from "./data/questions";
import { personalities, calculatePersonality, Personality } from "./data/personalities";
import PersonalityCharacter from "./components/PersonalityCharacter";

type AppState = "landing" | "quiz" | "result";

function App() {
  const [appState, setAppState] = useState<AppState>("landing");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState<Personality | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStart = () => {
    setAppState("quiz");
    setCurrentQuestion(0);
    setScores({});
    setResult(null);
    setSelectedOption(null);
  };

  const handleSelectOption = (optionIndex: number) => {
    const option = questions[currentQuestion].options[optionIndex];
    setSelectedOption(String(optionIndex));

    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([key, value]) => {
      newScores[key] = (newScores[key] || 0) + value;
    });

    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(null);
        setScores(newScores);
      } else {
        const personality = calculatePersonality(newScores);
        setResult(personality);
        setAppState("result");
      }
    }, 600);
  };

  const handleRetry = () => {
    setAppState("landing");
    setCurrentQuestion(0);
    setScores({});
    setSelectedOption(null);
    setResult(null);
  };

  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
      {/* Landing Page */}
      {appState === "landing" && (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="max-w-2xl w-full">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="inline-block bg-white rounded-3xl px-8 py-4 shadow-2xl mb-6">
                <h1 className="text-6xl font-black tracking-tighter" style={{ color: "#764ba2" }}>
                  SCUTI
                </h1>
                <p className="text-sm font-semibold text-gray-500 tracking-widest mt-1">
                  SOUTH CHINA UNIVERSITY OF TECHNOLOGY
                </p>
              </div>
              <div className="text-white">
                <p className="text-2xl font-bold mb-2">华工人格测试™</p>
                <p className="text-sm opacity-75">⚠️ 纯属娱乐，请勿对号入座（但如果对上了也不是我的问题）</p>
              </div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🎓</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  你是哪种华工人？
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  根据你在华工大学生活中的真实（或理想）反应，
                  <br />
                  精准测出你的大学人格类型！
                </p>
              </div>

              <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <span>📝 共20题</span>
                    <span>⏱️ 约5分钟</span>
                    <span>🎭 10种沙雕人格</span>
                  </div>
              </div>

              <button
                onClick={handleStart}
                className="w-full py-4 rounded-2xl text-white font-bold text-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
              >
                开始测试 🚀
              </button>
            </div>

            <p className="text-center text-white text-xs opacity-50 mt-4">
              ⚠️ 纯属娱乐，请勿严肃对待 · 欢迎传播，禁止商业用途 · scuti111.com
            </p>
          </div>
        </div>
      )}

      {/* Quiz Page */}
      {appState === "quiz" && (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
          <div className="max-w-2xl w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handleRetry}
                className="text-white opacity-75 hover:opacity-100 transition-opacity text-sm"
              >
                ← 重新开始
              </button>
              <div className="bg-white bg-opacity-20 rounded-full px-4 py-1">
                <span className="text-white font-bold text-sm">
                  {currentQuestion + 1} / {questions.length}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mb-8">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #a8edea, #fed6e3)",
                }}
              />
            </div>

            {/* Question Card */}
            <div
              className={`bg-white rounded-3xl shadow-2xl p-8 transition-all duration-300 ${
                isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {/* Question */}
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">{questions[currentQuestion].emoji}</div>
                <h2 className="text-lg font-bold text-gray-800 leading-relaxed">
                  {questions[currentQuestion].question}
                </h2>
              </div>

              {/* Options */}
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !selectedOption && handleSelectOption(index)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 font-medium leading-relaxed ${
                      selectedOption === String(index)
                        ? "border-purple-500 bg-purple-50 text-purple-800 scale-105"
                        : selectedOption !== null
                        ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
                        : "border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-gray-700 hover:scale-102 cursor-pointer active:scale-95"
                    }`}
                    style={
                      selectedOption === String(index)
                        ? { borderColor: "#764ba2", backgroundColor: "#f5f0ff" }
                        : {}
                    }
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Tips */}
            <p className="text-center text-white text-xs opacity-60 mt-4">
              💡 选择第一直觉最符合你的选项
            </p>
          </div>
        </div>
      )}

      {/* Result Page */}
      {appState === "result" && result && (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
          <div className="max-w-2xl w-full">
            {/* Result Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-6">
              {/* Header gradient banner */}
              <div
                className="p-8 text-center text-white"
                style={{
                  background: `linear-gradient(135deg, ${result.gradientFrom} 0%, ${result.gradientTo} 100%)`,
                }}
              >
                <div className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-1 mb-4">
                  <span className="text-sm font-semibold opacity-90">你的 scuti111 类型是</span>
                </div>
                <h1 className="text-4xl font-black mb-2">{result.name}</h1>
                <p className="text-sm font-semibold opacity-80 tracking-widest mb-4">
                  {result.title}
                </p>
                <div className="text-5xl">{result.emoji}</div>
              </div>

              {/* Character Illustration */}
              <div
                className="flex justify-center py-6"
                style={{ backgroundColor: result.bgColor }}
              >
                <div className="relative">
                  <PersonalityCharacter personality={result} size={180} />
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-full blur-3xl opacity-30"
                    style={{ backgroundColor: result.color, transform: "scale(0.8)" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Description */}
                <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                  <p className="text-gray-700 leading-relaxed text-center">{result.description}</p>
                </div>

                {/* Traits */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-800 mb-3 text-center">✨ 人格特质</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {result.traits.map((trait, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                        style={{ backgroundColor: result.color }}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Typical Scene */}
                <div
                  className="rounded-2xl p-5 mb-6"
                  style={{ backgroundColor: result.bgColor }}
                >
                  <h3 className="font-bold mb-2" style={{ color: result.color }}>
                    🎬 你的经典场景
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{result.typicalScene}</p>
                </div>

                {/* Compatible With */}
                <div className="bg-gray-50 rounded-2xl p-5 mb-8">
                  <h3 className="font-bold text-gray-800 mb-2">💫 最佳搭档类型</h3>
                  <p className="text-gray-600 text-sm">{result.compatibleWith}</p>
                </div>

                {/* All types preview */}
                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-4 text-center">还有这些 scuti111 类型 ↓</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {Object.values(personalities).map((p) => (
                      <div
                        key={p.id}
                        className={`rounded-xl p-2 text-center transition-all ${
                          p.id === result.id ? "ring-2 scale-105" : ""
                        }`}
                        style={{
                          backgroundColor: p.bgColor,
                          ringColor: p.color,
                          boxShadow: p.id === result.id ? `0 0 0 2px ${p.color}` : "none",
                        }}
                      >
                        <div className="text-xl mb-1">{p.emoji}</div>
                        <p className="text-xs font-semibold text-gray-700 leading-tight">{p.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleRetry}
                    className="w-full py-4 rounded-2xl text-white font-bold text-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${result.gradientFrom} 0%, ${result.gradientTo} 100%)`,
                    }}
                  >
                    再测一次 🔄
                  </button>
                  <button
                    onClick={() => {
                      const text = `我做了 scuti111 华工人格测试！\n我是「${result.name}」—— ${result.title}\n${result.emoji}\n${result.description.slice(0, 40)}...\n快来测测你是哪种华工人！`;
                      navigator.clipboard?.writeText(text).then(() => {
                        alert("✅ 已复制到剪贴板，快去分享给同学！");
                      });
                    }}
                    className="w-full py-4 rounded-2xl font-bold text-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{ borderColor: result.color, color: result.color }}
                  >
                    分享给同学 📤
                  </button>
                </div>
              </div>
            </div>

            <p className="text-center text-white text-xs opacity-60">
              scuti111.com · 华工学生人格测试 · 仅供娱乐
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
