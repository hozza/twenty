import { formatInTimeZone } from 'date-fns-tz';

import { Select } from '@/ui/input/components/Select';
import { TimeFormat } from '@/workspace-member/constants/TimeFormat';

type DateTimeSettingsTimeFormatSelectProps = {
  value: TimeFormat;
  onChange: (nextValue: TimeFormat) => void;
  timeZone: string;
};

export const DateTimeSettingsTimeFormatSelect = ({
  onChange,
  timeZone,
  value,
}: DateTimeSettingsTimeFormatSelectProps) => (
  <Select
    dropdownId="datetime-settings-time-format"
    label="Time format"
    fullWidth
    value={value}
    options={[
      {
        label: `24h (${formatInTimeZone(
          Date.now(),
          timeZone,
          TimeFormat['24h'],
        )})`,
        value: TimeFormat['24h'],
      },
      {
        label: `12h (${formatInTimeZone(
          Date.now(),
          timeZone,
          TimeFormat['12h'],
        )})`,
        value: TimeFormat['12h'],
      },
    ]}
    onChange={onChange}
  />
);
