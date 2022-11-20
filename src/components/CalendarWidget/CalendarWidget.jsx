import React, { useState } from 'react';
import Calendar from 'moedim';

function CalendarWidget() {
  const [value, setValue] = useState(new Date());
  return <Calendar value={value} onChange={(d) => setValue(d)} />;
}

export default CalendarWidget;
