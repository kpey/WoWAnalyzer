import React from 'react';

import Wrapper from 'common/Wrapper';

export default [
  [new Date('2017-10-24'), 'Updated Thunder Focus Tea, Dancing Mist, and Uplifting Trance statistics formating', 'anomoly'],
  [new Date('2017-10-17'), 'Added T21 2 and 4 set healing contribution statistics', 'anomoly'],
  [new Date('2017-09-30'), 'Added Zen Pulse and Chi Wave to the Cast Efficiency tab. Updated the Maintainer information', 'anomoly'],
  [new Date('2017-09-27'), 'Clean up some old code and update the Second Gust of Mist Overhealing calculation to show overhealing of the Second Gust proc as a % of the total healing of that second Gust', 'anomoly'],
  [new Date('2017-09-20'), 'Update Essence Font Mastery tooltip to include overhealing of second Gust of Mist proc', 'anomoly'],
  [new Date('2017-09-04'), 'Refactored dependancies to follow new format. No change visible to user', 'anomoly'],
  [new Date('2017-08-31'), 'Initial Extended Healing Trait implementation. Currently estimating the trait as a 5% increase per rank.', 'anomoly'],
  [new Date('2017-08-30'), 'Initial Relic Traits added to statics view.', 'anomoly'],
  [new Date('2017-08-25'), 'Mistweaver Monk: Corrected issue with MonkSpreadsheet tab. Removed / Trimmed some suggestions as this data was redundant when combined with WCL', 'anomoly'],
  [new Date('2017-08-16'), 'Mistweaver Monk: Soothing Mist suggestion added', 'anomoly'],
  [new Date('2017-08-16'), 'Mistweaver Monk: Added the effective healing contribute of Enveloping Mists as a statistic', 'anomoly'],
  [new Date('2017-08-15'), 'Mistweaver Monk: Updates to Mistweaver module to align with new module structure. No information should be lost, but this will be moved around', 'anomoly'],
  [new Date('2017-08-09'), 'Mistweaver Monk: Bug Fix for Dancing Mist calculation and Ending Mana.', 'anomoly'],
  [new Date('2017-08-05'), 'Mistweaver Monk: Added Player Log tab to support new Mistweaver spreadsheet needs.', 'anomoly'],
  [new Date('2017-08-01'), 'Mistweaver Monk: Bug Fix for Thunder Focus Tea casts calulating incorrectly when specific cast sequence was used', 'anomoly'],
  [new Date('2017-07-30'), 'Mistweaver Monk: Added Refreshing Jade Wind suggestion and updated some talent descriptions', 'anomoly'],
  [new Date('2017-07-08'), 'Mistweaver Monk: Added Ovyd\'s Winter Wrap healing contribution.', 'anomoly'],
  [new Date('2017-07-03'), 'Mistweaver Monk: Added Petrichor Lagniappe wasted reduction time in seconds', 'anomoly'],
  [new Date('2017-06-26'), 'Mistweaver Monk: Added Shelter of Rin and Doorway To Nowhere, fixed Ei\'thas, Lunar Glides of Eramas healing contribution formula.', 'anomoly'],
  [new Date('2017-06-20'), 'Mistweaver Monk: Added T20 2pc Tracking, Added support for Focused Thunder, adjusted suggestion for TFT usage.', 'anomoly'],
  [new Date('2017-06-18'), 'Mistweaver Monk: Implement Dead Time / Non-Healing Time.  Update Mana Tea data tip to show MP5', 'anomoly'],
  [new Date('2017-06-16'), 'Mistweaver Monk: Tier 20 4 Piece Effective Healing contribution implemented.', 'anomoly'],
  [new Date('2017-06-15'), 'Mistweaver Monk: Mana Cost adjustments for Patch 7.2.5', 'anomoly'],
  [new Date('2017-06-09'), 'Mistweaver Monk: Added Ei\'thas, Lunar Glides of Eramas statistic and adjusted Sheilun\'s Gift issue warning to account for low stacks and high overheal.', 'anomoly'],
  [new Date('2017-06-09'), 'Mistweaver Monk: Celestial Breath and Mists of Sheilun buffs / procs and the healing associated. Refreshing Jade Wind Healing Implemented. Corrected some negative calculations with Uplifting Trance. Correcting formatting error with SG Stacks.', 'anomoly'],
  [new Date('2017-06-05'), 'Mistweaver Monk: Added utlity CDs to cast efficiency for tracking purposes.', 'anomoly'],
  [new Date('2017-06-04'), 'Mistweaver Monk: Added Chi Burst healing tracking and suggestions.', 'anomoly'],
  [new Date('2017-06-02'), 'Mistweaver Monk: Enabled Dancing Mists tracking.  Healing provided by Dancing Mists procs now show in analysis.', 'anomoly'],
  [new Date('2017-06-01'), 'Mistweaver Monk: Include healing from Chi-Ji talent into overall healing totals for monk.', 'anomoly'],
  [new Date('2017-06-01'), 'Mistweaver Monk: Essence Font Tracking Implemented including tagets hit and HOT buffs utilized.  Readme updates for all modules and cast efficiency targets.', 'anomoly'],
  [new Date('2017-05-30'), 'Mistweaver Monk: Adjusted some of the Dancing Mists logic per review. Added in missed Whispers of Shaohao healing. Tracking', 'anomoly'],
  [new Date('2017-05-29'), 'Mistweaver Monk: Added Sheilun\'s Gift statistic and an overhealing suggestion. With Effusive Mists talent, Effuse casts at 12 stacks are considered wasted. Added simple proc counter for Dancing Mists.', 'anomoly'],
  [new Date('2017-05-27'), 'Mistweaver Monk: Added Thunder Focus Tea spell buff tracking. Added Lifecycles mana saving tracking, added Spirit of the Crane mana return tracking.', 'anomoly'],
  [new Date('2017-05-26'), <Wrapper>Mistweaver Monk: Added the remaining MW spells / abilities known as of now. Removed UT Usage issue, as this is going away in 7.2.5. Updated CPM Module to give a better understanding of MW Monk Spells. Incorporated TFT -> Viv usage in UT Proc calculations. All of this was done by <b>@anomoly</b>.</Wrapper>, 'anomoly'],
  [new Date('2017-05-24'), <Wrapper>Added <span className="Monk">Mistweaver Monk</span> support by <b>@Anomoly</b>! Thanks a lot for your contribution!</Wrapper>, 'anomoly'],
];
