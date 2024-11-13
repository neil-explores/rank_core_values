# Project Overview
A Test to Rank Your Core Values. Live website at [https://sixcorevalues.com](https://sixcorevalues.com/).

## Purpose: Honor Your Core Values
One can only be in harmony with their core values once one's core values are known. 
- Discover your top core values with this app in 15 minutes or less.
- Set a daily intention to guide your day's activities by your core values.

## Implementation - Overview
This test is comprised of two phases: **Phase 1 (Filter)** and **Phase 2 (Rank)**.

### Phase 1 (Filter)
The purpose of this phase is to reduce the amount of core value items to a more manageable size. 
- This phase is composed of 6 questions. For each question, the user is presented with a list of core values. The user picks ten to keep, and the rest are discarded.
- This phase reduces the core value items from 90 items to 20 items.
- Items are shuffled throughout this phase, so the questions are different each time the test is taken.

### Phase 2 (Rank)
Now that the amount of core value items is reduced to a more manageable size from *Phase 1 (Filter)*, this phase uses a **weighted score approach** to rank the remaining core value items. 

#### Ranking Strategy - Overview
There are 17 total questions. For each question, the user is presented with 5 core values, and the user ranks their top 3 favorites. 
- The 1st place (favorite) core value item gets a weighted value of **+2**.
- The 2nd place item gets a weighted value of **+1**.
- The 3rd place value gets a weight value of **+0**.
- The last place items (4th and 5th places) both get a weighted value of **-1**.

After the end of the 17 questions, the core value items accumulate a weighted score which prioritizes the core value items in accordance to the user's preference. 

#### Ranking Stategy - Details
Why 17 questions for the ranking phase? 

The 17 questions are broken up into 5 rounds. The first three rounds establish a base score/value for all 20 core value items. At the end of rounds 3,4, and 5: *approximately* 40% of the lowest scoring values are removed. This results in 6 top core values based on their weighted score.
- *Note*: I did *approximately 40% item removal* for ease and consistency. For example: exactly 40% item removal for end-of-round 3 would be 8 items, but I wanted to maintain a consistent 5-item comparison in order to reduce bias. 

| Round | Item Size | Questions | End of Round - Items removed | Items Remaining |
|-------|-----------|-----------|------------------------------|-----------------|
| 1     | 20        | 4         | 0                            | 20              |
| 2     | 20        | 4         | 0                            | 20              |
| 3     | 20        | 4         | 5                            | 15              |
| 4     | 15        | 3         | 5                            | 10              |
| 5     | 10        | 2         | 4                            | 6               |

Items are shuffled throughout this phase. Also, in order to maximize insight per question: attempts are made to make the set of core value items in each question unique (i.e. no core value item in a particular question has yet been compared to any other item in a previous question). This intention eventually becomes mathematically impossible, so some questions will inevitably have comparisons between core value items that have previously seen each other.

## Maximize Validity of Test Results
The spirit of this test is to make it both quick and valid for the user. If the user would like additional validity in the results, the user is invited to let some time pass (perhaps a few days), and then to take the test again.

My hypothesis: I do not believe our core values are permanent, but they instead change over time due to our life experiences. I believe major life events especially have an impact. The core values identified here are one's core values at a moment in time. 

## Attributions 
The subject of core values was presented to me within a live, online [Mindful Self-Compassion Course](https://centerformsc.org/). The 90-item list of core values used in this project was shared within that course.  

Thanks to the instructor of my live, online mindful self compassion course: [Joel Grow, PhD](https://www.joelgrow.com/) for his encouragement when I shared the idea of building this tool. 

Thanks to Eric Carr for sharing his knowledge on ranking strategies. This helped me pick the strategy that is used in this tool. 



