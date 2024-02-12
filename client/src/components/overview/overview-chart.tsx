import { useGetSalesQuery } from '@/state/api';
import { useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { useMemo } from 'react';

const OverviewChart = ({ isDashboard = false, view }: { isDashboard?: boolean; view: string }) => {
  const theme = useTheme() as any;
  const { data, isLoading } = useGetSalesQuery(null);

  // Data for @nivo/line
  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!data) return [];

    const { monthlyData } = data;
    const totalSalesLine: any = {
      id: 'totalSales',
      color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine: any = {
      id: 'totalUnits',
      color: theme.palette.secondary[600],
      data: [],
    };

    Object.values(monthlyData).reduce(
      (acc, { month, totalSales, totalUnits }) => {
        const currentSales = acc.sales + Number(totalSales);
        const currentUnits = acc.units + Number(totalUnits);

        totalSalesLine.data = [...totalSalesLine.data, { x: month, y: currentSales }];
        totalUnitsLine.data = [...totalUnitsLine.data, { x: month, y: currentUnits }];

        return { sales: currentSales, units: currentUnits };
      },
      { sales: 0, units: 0 },
    );

    return [[totalSalesLine], [totalUnitsLine]];
  }, [data]); //eslint-disable-line

  if (!data || isLoading) return 'Loading...';

  return (
    <ResponsiveLine
      data={view === 'sales' ? (totalSalesLine as any) : totalUnitsLine}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.secondary[200],
            },
          },
          legend: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.secondary[200],
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.secondary[200],
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.secondary[200],
          },
        },
        tooltip: {
          container: {
            color: theme.palette.primary.main,
          },
        },
      }}
      margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: (v) => {
          if (isDashboard) return v.slice(0, 3);
          return v;
        },
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? '' : 'Month',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? '' : `Total ${view === 'sales' ? 'Revenue' : 'Units'} for Year`,
        legendOffset: -60,
        legendPosition: 'middle',
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={
        !isDashboard
          ? [
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 30,
                translateY: -40,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default OverviewChart;
