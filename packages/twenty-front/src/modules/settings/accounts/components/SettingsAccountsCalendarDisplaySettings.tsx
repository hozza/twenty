import { useState } from 'react';
import styled from '@emotion/styled';

import { DateTimeSettingsDateFormatSelect } from '@/settings/profile/components/DateTimeSettingsDateFormatSelect';
import { DateTimeSettingsTimeFormatSelect } from '@/settings/profile/components/DateTimeSettingsTimeFormatSelect';
import { DateTimeSettingsTimeZoneSelect } from '@/settings/profile/components/DateTimeSettingsTimeZoneSelect';
import { detectDateFormat } from '@/workspace-member/utils/detectDateFormat';
import { detectTimeFormat } from '@/workspace-member/utils/detectTimeFormat';
import { detectTimeZone } from '@/workspace-member/utils/detectTimeZone';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const SettingsAccountsCalendarDisplaySettings = () => {
  const [timeZone, setTimeZone] = useState(detectTimeZone());

  const [dateFormat, setDateFormat] = useState(detectDateFormat());

  const [timeFormat, setTimeFormat] = useState(detectTimeFormat());

  return (
    <StyledContainer>
      <DateTimeSettingsTimeZoneSelect value={timeZone} onChange={setTimeZone} />
      <DateTimeSettingsDateFormatSelect
        value={dateFormat}
        onChange={setDateFormat}
        timeZone={timeZone}
      />
      <DateTimeSettingsTimeFormatSelect
        value={timeFormat}
        onChange={setTimeFormat}
        timeZone={timeZone}
      />
    </StyledContainer>
  );
};
