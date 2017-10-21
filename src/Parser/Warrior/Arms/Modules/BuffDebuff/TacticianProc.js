import React from 'react';
import StatisticBox, { STATISTIC_ORDER } from 'Main/StatisticBox';
import SpellIcon from 'common/SpellIcon';

import SPELLS from 'common/SPELLS';
import Module from 'Parser/Core/Module';

const debug = false;

class TacticianProc extends Module {
  totalProcs = 0;
  lastTimestamp = 0;

  on_byPlayer_applybuff(event) {
    const spellId = event.ability.guid;
    if (SPELLS.TACTICIAN.id !== spellId) {
      return;
    }
    // Get the applied timestamp
    this.lastTimestamp = event.timestamp;
    debug && console.log('Tactician was applied');
    this.totalProcs += 1;
  }

  on_byPlayer_refreshbuff(event) {
    const spellId = event.ability.guid;
    if (SPELLS.TACTICIAN.id !== spellId) {
      return;
    }
    // Get the applied timestamp
    this.lastTimestamp = event.timestamp;
    debug && console.log('Tactician was refreshed');
    this.totalProcs += 1;
  }

  statistic() {
    return (
      <StatisticBox
        icon={<SpellIcon id={SPELLS.TACTICIAN.id} />}
        value={this.totalProcs}
        label="Total Tactician Procs"
        tooltip={`Tactician resets the cooldown on Colossus Smash and Mortal Strike. You got ${this.totalProcs} more Mortal Strike and Colossus Smash.`}
      />
    );
  }
  statisticOrder = STATISTIC_ORDER.CORE(20);
}

export default TacticianProc;
