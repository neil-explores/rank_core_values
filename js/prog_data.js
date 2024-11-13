const debugging_flag = false;

const discard_phase_questionDetails = {question_pick_counter: 0, to_keep_items: [], to_discard_items: [] }
const discard_phase_round = {question_groups: [], question_group_index: 0, round_counter: 0 }

const questionDetails = {question_pick_counter: 0, first_place_item: null, second_place_item: null, third_place_item: null, fourth_place_item: null, fifth_place_item: null}

// Each round consists of question_groups.
//    Each quest group contains 5 core values item objects
// For tracking state of the round, we keep track of the index of the question_group via question_group_index to see how far in the round the user is in.
// We know a round is over by checking the round_counter, and by checking the question_group index
const round = {question_groups: [], question_group_index: 0, round_counter: 0};

let total_filter_questions_answered = 1;
// start at 0 for the second progress bar
let total_ranking_questions_answered = 0;


const item_1 = {id: 1, name: "Acceptance", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_2 = {id: 2, name: "Authenticity", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_3 = {id: 3, name: "Achievement", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_4 = {id: 4, name: "Adventure", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_5 = {id: 5, name: "Art", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_6 = {id: 6, name: "Authority", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_7 = {id: 7, name: "Autonomy", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_8 = {id: 8, name: "Balance", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_9 = {id: 9, name: "Beauty", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_10 = {id: 10, name: "Boldness", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_11 = {id: 11, name: "Caring", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_12 = {id: 12, name: "Compassion", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_13 = {id: 13, name: "Challenge", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_14 = {id: 14, name: "Citizenship", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_15 = {id: 15, name: "Community", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_16 = {id: 16, name: "Competency", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_17 = {id: 17, name: "Compromise", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_18 = {id: 18, name: "Contribution", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_19 = {id: 19, name: "Courage", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_20 = {id: 20, name: "Creativity", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_21 = {id: 21, name: "Curiosity", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_22 = {id: 22, name: "Determination", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_23 = {id: 23, name: "Duty", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_24 = {id: 24, name: "Fairness", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_25 = {id: 25, name: "Faith", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_26 = {id: 26, name: "Fame", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_27 = {id: 27, name: "Family", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_28 = {id: 28, name: "Fitness", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_29 = {id: 29, name: "Flexibility", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_30 = {id: 30, name: "Forgiveness", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_31 = {id: 31, name: "Freedom", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_32 = {id: 32, name: "Friendships", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_33 = {id: 33, name: "Fun", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_34 = {id: 34, name: "Gratitude", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_35 = {id: 35, name: "Growth", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_36 = {id: 36, name: "Happiness", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_37 = {id: 37, name: "Health", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_38 = {id: 38, name: "Honesty", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_39 = {id: 39, name: "Humility", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_40 = {id: 40, name: "Humor", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_41 = {id: 41, name: "Imagination", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_42 = {id: 42, name: "Independence", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_43 = {id: 43, name: "Influence", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_44 = {id: 44, name: "Integrity", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_45 = {id: 45, name: "Intimacy", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_46 = {id: 46, name: "Inner Harmony", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_47 = {id: 47, name: "Justice", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_48 = {id: 48, name: "Kindness", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_49 = {id: 49, name: "Knowledge", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_50 = {id: 50, name: "Leadership", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_51 = {id: 51, name: "Learning", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_52 = {id: 52, name: "Love", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_53 = {id: 53, name: "Loyalty", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_54 = {id: 54, name: "Mastery", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_55 = {id: 55, name: "Meaningful Work", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_56 = {id: 56, name: "Mindfulness", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_57 = {id: 57, name: "Monogamy", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_58 = {id: 58, name: "Music", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_59 = {id: 59, name: "Nurturing", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_60 = {id: 60, name: "Openness", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_61 = {id: 61, name: "Optimism", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_62 = {id: 62, name: "Patriotism", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_63 = {id: 63, name: "Peace", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_64 = {id: 64, name: "Pleasure", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_65 = {id: 65, name: "Poise", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_66 = {id: 66, name: "Popularity", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_67 = {id: 67, name: "Protect", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_68 = {id: 68, name: "Provide", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_69 = {id: 69, name: "Recognition", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_70 = {id: 70, name: "Religion", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_71 = {id: 71, name: "Reputation", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_72 = {id: 72, name: "Respect", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_73 = {id: 73, name: "Responsibility", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_74 = {id: 74, name: "Security", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_75 = {id: 75, name: "Self-Acceptance", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_76 = {id: 76, name: "Self-Knowledge", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_77 = {id: 77, name: "Self-Respect", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_78 = {id: 78, name: "Service", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_79 = {id: 79, name: "Simplicity", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_80 = {id: 80, name: "Solitude", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_81 = {id: 81, name: "Spirituality", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_82 = {id: 82, name: "Stability", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_83 = {id: 83, name: "Success", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_84 = {id: 84, name: "Status", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_85 = {id: 85, name: "Tolerance", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_86 = {id: 86, name: "Tradition", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_87 = {id: 87, name: "Trustworthiness", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_88 = {id: 88, name: "Virtue", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_89 = {id: 89, name: "Wealth", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};
const item_90 = {id: 90, name: "Wisdom", weightedVal:0, wasSel: false, seen_items: [], is_assigned_question_group: false,removed: false, round_removed: null, discarded: false};

let all_items = [item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11, item_12, item_13, item_14, item_15, item_16, item_17, item_18, item_19, item_20, item_21, item_22, item_23, item_24, item_25, item_26, item_27, item_28, item_29, item_30, item_31, item_32, item_33, item_34, item_35, item_36, item_37, item_38, item_39, item_40, item_41, item_42, item_43, item_44, item_45, item_46, item_47, item_48, item_49, item_50, item_51, item_52, item_53, item_54, item_55, item_56, item_57, item_58, item_59, item_60, item_61, item_62, item_63, item_64, item_65, item_66, item_67, item_68, item_69, item_70, item_71, item_72, item_73, item_74, item_75, item_76, item_77, item_78, item_79, item_80, item_81, item_82, item_83, item_84, item_85, item_86, item_87, item_88, item_89, item_90];
