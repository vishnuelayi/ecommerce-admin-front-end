import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const data = [
    {
      type: 'January',
      sales: 38,
    },
    {
      type: 'February',
      sales: 52,
    },
    {
      type: 'March',
      sales: 61,
    },
    {
      type: 'April',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'June',
      sales: 38,
    },
    {
      type: 'July',
      sales: 38,
    },
    {
      type: 'August',
      sales: 38,
    },
    
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: "#756AB6",
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
     
    },
    style: {
        fill: '#756AB6',
        opacity: 0.6,
      },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;