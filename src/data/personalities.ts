export interface Personality {
  id: string;
  name: string;
  title: string;
  emoji: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  bgColor: string;
  description: string;
  traits: string[];
  typicalScene: string;
  compatibleWith: string;
}

export const personalities: { [key: string]: Personality } = {
  // 🐱 猫女 — 喜欢小猫的人
  "猫女": {
    id: "猫女",
    name: "猫女",
    title: "MIAOXINGREN",
    emoji: "🐱",
    color: "#E8A0BF",
    gradientFrom: "#E8A0BF",
    gradientTo: "#FAD4E0",
    bgColor: "#FFF0F5",
    description:
      "你对猫的热爱已经超越了物种的界限。路边任何移动的毛茸茸物体都能让你瞬间蹲下，发出「咪咪咪」的召唤声。手机相册里猫咪照片占80%，剩下20%是表情包。偶尔看到一只橘猫路过，你会跟着它走两条街只为摸一把。你的座右铭：没有猫的人生是不完整的。",
    traits: ["🐾 见猫必蹲", "📱 猫片存储器", "😸 华工猫协编外成员", "🌸 吸猫续命"],
    typicalScene: "上课迟到理由：「路上遇到一只猫，蹲了十分钟起不来」",
    compatibleWith: "炮弹小猫（你们都是猫，只是人类形态）",
  },

  // 😴 超级旷工 — 经常旷课
  "超级旷工": {
    id: "超级旷工",
    name: "超级旷工",
    title: "TRUANT KING",
    emoji: "😴",
    color: "#9C27B0",
    gradientFrom: "#9C27B0",
    gradientTo: "#CE93D8",
    bgColor: "#F3E5F5",
    description:
      "出勤率这个东西，是用来被打破的。每次早八闹钟响起，被子就像有吸力一样把你牢牢按住。点名查得严的那几天你反而神奇出勤，其他日子……全看心情和天气。你和班级群的关系永远停留在「有没有点名」的讨论里。学业上虽然佛系，但考试前你总能找到重点。",
    traits: ["😴 被子是灵魂伴侣", "📵 早八绝缘体", "👻 考前神出鬼没", "🎯 重点雷达精准"],
    typicalScene: "早八迟到了四十分钟，进教室的时候还在打哈欠，头发还翘着一撮",
    compatibleWith: "比尔盖茨（你负责仰望，他负责拯救你的学分）",
  },

  // 🍜 大胃袋 — 巨爱吃的人
  "大胃袋": {
    id: "大胃袋",
    name: "大胃袋",
    title: "FOODIE LEGEND",
    emoji: "🍜",
    color: "#FF9800",
    gradientFrom: "#FF9800",
    gradientTo: "#FFCC80",
    bgColor: "#FFF8EE",
    description:
      "你的人生哲学很简单：先吃饱，再说别的。考砸了要吃，考好了更要吃；天气好要吃，天气差必须吃；早上起来吃什么，中午吃什么，晚上吃什么——你的大脑有三成算力永远在处理「下一顿吃什么」。你对学校食堂的了解，远超任何一门专业课。对你来说，「吃」是动词，也是名词，更是形容词。",
    traits: ["🍜 干饭是神圣使命", "🌙 凌晨沙县常客", "🏃 为美食可步行三公里", "😋 吃完一切都好了"],
    typicalScene: "期末考试前一天晚上，在宿舍群里问：「考完去哪吃宵夜？」",
    compatibleWith: "超级旷工（你们一起研究外卖菜单，能吃出花来）",
  },

  // 💄 美妆博主 — 美妆网购购物精致生活
  "美妆博主": {
    id: "美妆博主",
    name: "美妆博主",
    title: "GLAM GURU",
    emoji: "💄",
    color: "#FF69B4",
    gradientFrom: "#FF69B4",
    gradientTo: "#F8BBD9",
    bgColor: "#FFF0F7",
    description:
      "你的人生不能没有仪式感。出门倒垃圾也要打底妆，等外卖要敷面膜，睡前流程堪比美容博主。你的快递数量是全宿舍之和，拆包裹的快乐足以抵消一切烦恼。你熟知各种护肤成分，能用三小时分析一瓶精华的性价比。精致是你的人生底色，不修边幅这个词在你的字典里不存在。",
    traits: ["💄 倒垃圾也要打底", "📦 快递数量全宿舍第一", "🔬 成分党进阶选手", "✨ 精致生活每一天"],
    typicalScene: "在宿舍对着镜子研究了十分钟出门妆，然后发现今天是周末不需要出门",
    compatibleWith: "炮弹小猫（你们互相种草，互相美丽）",
  },

  // 🎉 社交炸弹 — 很有社交能力的人
  "社交炸弹": {
    id: "社交炸弹",
    name: "社交炸弹",
    title: "SOCIAL BOMB",
    emoji: "🎉",
    color: "#E91E63",
    gradientFrom: "#E91E63",
    gradientTo: "#F48FB1",
    bgColor: "#FCE4EC",
    description:
      "你是人形充电宝，走到哪里都能给周围的人带来能量。走进任何一个陌生群体，十分钟内认识三个人，二十分钟内全场知道你是谁。辅导员@所有人你第一个回「收到老师！」，还顺手截图发进两个群。你不是话多，你只是把社交当成了一门艺术在认真修炼。别人通讯录200人，你的2000人起步。",
    traits: ["🎉 天生破冰圣手", "📱 微信好友永远不够用", "🗣️ 沉默不超过5分钟", "🌟 人群中发光体"],
    typicalScene: "大合照主动站C位，合照完了还帮大家修图发群里，顺便@没到的人",
    compatibleWith: "超级旷工（你负责破冰，他负责微笑点头）",
  },

  // 🧊 炮弹小猫 — 看起来高冷，实际上很沙雕
  "炮弹小猫": {
    id: "炮弹小猫",
    name: "炮弹小猫",
    title: "ICE OUT HOT IN",
    emoji: "🧊",
    color: "#00BCD4",
    gradientFrom: "#00BCD4",
    gradientTo: "#80DEEA",
    bgColor: "#E0F7FA",
    description:
      "你给所有人的第一印象是：高冷。表情淡淡的，说话直接，有时候甚至显得不近人情。但只要和你熟了，室友会发现你是宿舍里最沙雕的那一个。路过猫你会面无表情地走过，但回去就把那只猫设成了手机壁纸。你的外壳是冰川，里面是一个让人意想不到的快乐源泉。",
    traits: ["🧊 外冷内热", "😶 表情管理永远在线", "💥 沙雕只展示给熟人", "🐱 偷偷爱猫绝不承认"],
    typicalScene: "路上没吸那只猫，回来截图发室友：「好可爱」（撤回已来不及）",
    compatibleWith: "猫女（猫是你们心照不宣的暗号）",
  },

  // 💕 大象 — 爱搞对象的人
  "大象": {
    id: "大象",
    name: "大象",
    title: "LOVE ELEPHANT",
    emoji: "💕",
    color: "#FF69B4",
    gradientFrom: "#FF69B4",
    gradientTo: "#FFB6C1",
    bgColor: "#FFF0F5",
    description:
      "你的大脑有一半的算力永远在跑感情相关的进程。看到喜欢的人，和TA聊天，或者TA和别的异性说话——每一种场景都能触发你的情绪波动。你手机备忘录里存的不是单词，是「TA上次说喜欢喝什么」「TA最近压力有点大」。你认为人生最重要的事情就是找到对的人，然后研究怎么把TA照顾好。",
    traits: ["💕 情感雷达全天候开启", "🌹 随时准备恋爱或暗恋", "📒 备忘录记满TA的每一个细节", "💓 恋爱脑24小时在线"],
    typicalScene: "在图书馆和暗恋对象对视了三秒，回去和室友讨论「他是不是也喜欢我」到凌晨两点",
    compatibleWith: "社交炸弹（他帮你打探情报，你负责心跳）",
  },

  // 🎲 酱香老抽 — 爱搞抽象的人
  "酱香老抽": {
    id: "酱香老抽",
    name: "酱香老抽",
    title: "JIANGXIANG SAUCE",
    emoji: "🎲",
    color: "#8D6E63",
    gradientFrom: "#8D6E63",
    gradientTo: "#BCAAA4",
    bgColor: "#EFEBE9",
    description:
      "你的思维方式像GPS开了外挂，导航线路不走寻常路。你说的话有时候需要解码器才能理解，但你自己笑得最大声。别人不理解你的笑点，你也不理解别人的笑点——但这不妨碍你自得其乐。图书馆隔壁敲桌子，你用手指加入形成了即兴节拍。你的逻辑是：世界上最有趣的事情，往往发生在意料之外。",
    traits: ["🎲 笑点自成一派", "🌀 思维路径：火星直达", "💀 沙雕玩成艺术", "🎯 随机性极强不可预测"],
    typicalScene: "在图书馆和陌生人对敲节拍，结果成了朋友，还一起搞了个「图书馆即兴音乐会」",
    compatibleWith: "社交炸弹（你们一起整活，效果翻倍）",
  },

  // 🏆 比尔盖茨 — 时间管理大师，全方位成功选手
  "比尔盖茨": {
    id: "比尔盖茨",
    name: "比尔盖茨",
    title: "BILL GATES MODE",
    emoji: "🏆",
    color: "#2196F3",
    gradientFrom: "#2196F3",
    gradientTo: "#90CAF9",
    bgColor: "#E3F2FD",
    description:
      "你是校园传说。绩点、社团、竞赛、综测，没有一个方向是缺席的。你的日程表是一部微型史诗，每一分钟都有精确安排。选课会对着培养方案研究两小时，吃饭会计算性价比，期末前三周就开始复习。你不是卷，你只是用科学的方法在努力。当别人问你的秘诀，你淡淡说：「合理规划而已。」",
    traits: ["📋 日程精确到分钟", "🏅 综测优化路径专家", "⏰ 永远不迟到plan先行", "🧠 卷有卷的科学方法"],
    typicalScene: "期末前一天在复习，因为复习计划早在三周前就全部完成了",
    compatibleWith: "超级旷工（你拉他一把，他告诉你什么叫人间真实）",
  },

  // 🎮 段位王 — 爱打游戏的人
  "段位王": {
    id: "段位王",
    name: "段位王",
    title: "RANK MASTER",
    emoji: "🎮",
    color: "#7C4DFF",
    gradientFrom: "#7C4DFF",
    gradientTo: "#B388FF",
    bgColor: "#EDE7F6",
    description:
      "你的课余时间有六成贡献给了游戏。段位是你的尊严，战绩是你的脸面。每一次上分都是一场战役，每一个失误都是复盘素材。你熟知版本更新内容，能对装备改动侃侃而谈。室友以为你在学习，其实你在carry全队。你的人生信条：学习和娱乐可以并存，只要效率够高，游戏时间就像海绵里的水，挤一挤总会有的。",
    traits: ["🎮 段位即尊严", "📊 战绩复盘是日常", "🧠 版本改动倒背如流", "⚡ 高效学习为游戏让路"],
    typicalScene: "室友问你在干嘛，你说在学习，实际上刚刚打了一把五杀",
    compatibleWith: "比尔盖茨（你们互相成就，你carry他的课余，他拯救你的学分）",
  },
};

// 评分维度：猫女, 超级旷工, 大胃袋, 美妆博主, 社交炸弹, 炮弹小猫, 大象, 酱香老抽, 比尔盖茨, 段位王
export function calculatePersonality(scores: { [key: string]: number }): Personality {
  const catScore = scores["猫女"] || 0;
  const hideScore = scores["超级旷工"] || 0;
  const foodieScore = scores["大胃袋"] || 0;
  const makeupScore = scores["美妆博主"] || 0;
  const socialScore = scores["社交炸弹"] || 0;
  const coldScore = scores["炮弹小猫"] || 0;
  const loveScore = scores["大象"] || 0;
  const abstractScore = scores["酱香老抽"] || 0;
  const planScore = scores["比尔盖茨"] || 0;
  const gamingScore = scores["段位王"] || 0;

  // 各人格评分权重映射（综合考虑原始分和加权分）
  const rawMap = {
    "猫女": catScore,
    "超级旷工": hideScore,
    "大胃袋": foodieScore,
    "美妆博主": makeupScore,
    "社交炸弹": socialScore,
    "炮弹小猫": coldScore,
    "大象": loveScore,
    "酱香老抽": abstractScore,
    "比尔盖茨": planScore,
    "段位王": gamingScore,
  };

  const scoreMap: { [key: string]: number } = {
    "猫女": catScore * 1.2,
    "超级旷工": hideScore * 1.5,
    "大胃袋": foodieScore * 1.0,
    "美妆博主": makeupScore * 1.4,
    "社交炸弹": socialScore * 1.3,
    "炮弹小猫": coldScore * 1.2 + catScore * 0.3,
    "大象": loveScore * 1.4,
    "酱香老抽": abstractScore * 1.3 + gamingScore * 0.4,
    "比尔盖茨": planScore * 1.4,
    "段位王": gamingScore * 1.4 + planScore * 0.3,
  };

  // 先找原始分最高的维度
  const bestRaw = Object.entries(rawMap).sort((a, b) => b[1] - a[1])[0];
  // 再找加权分最高的维度
  const bestWeighted = Object.entries(scoreMap).sort((a, b) => b[1] - a[1])[0];

  // 综合判断：加权分达到4分以上才触发该人格，否则取原始分最高
  const topScore = bestWeighted[1];
  if (topScore >= 4) return personalities[bestWeighted[0]];
  return personalities[bestRaw[0]];

  // 取最高分
  const best = Object.entries(scoreMap).sort((a, b) => b[1] - a[1])[0];
  return personalities[best[0]] || personalities["社交炸弹"];
}
