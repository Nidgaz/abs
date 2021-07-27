import React, { useState, useEffect, useRef } from 'react';
import { DatePicker, Button, Space } from 'antd';
import moment from "moment";

function useOutsideAlerter(ref: any, callback: any) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const { RangePicker } = DatePicker;
const dateFormat: string = 'DD.MM.YYYY';

const SpecificPeriodSelector = (): JSX.Element => {
  return (
    <>
      <div>Period:</div>
      <Space>
        <Button >Today</Button>
        <Button >Last Week</Button>
        <Button >Last Month</Button>
      </Space>
      
      <div>Group: </div>
      <Space>
        <Button >Day</Button>
        <Button >Week's</Button>
        <Button >Month's</Button>
        <Button >Total</Button>
      </Space>
      
      <div>Type: </div>
      <Space>
        <Button >Approved</Button>
        <Button >Leads</Button>
        <Button >Send to CS</Button>
      </Space>
    </>
  )
}

enum Period { 
  Today = "today", 
  Week = "week",
  month = "month", 
};

const DateFilter = (): JSX.Element => {
  const [status, setStatus] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(Period.Week);
  const [group, setGroup] = useState<string>('weeks');
  const [type, setType] = useState<string>('total');

  const wrapperRef = useRef<HTMLElement>(null);
  useOutsideAlerter(wrapperRef, setStatus);

  const onChange  = (dates: any, dateStrings: [string, string]): void  =>  {
      console.log(dates, dateStrings);
  };

  return (
    <div>
      <RangePicker
        defaultValue={[moment('12.07.2021', dateFormat), moment('12.07.2021', dateFormat)]}
        format={dateFormat}
        renderExtraFooter={() => <SpecificPeriodSelector/>}
        onChange={onChange}
        open={status}
        focus={() => setStatus(true)}
      />
    </div>
  )
};

export { DateFilter };