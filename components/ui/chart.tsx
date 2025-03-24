"use client"

import type * as React from "react"

export const ChartContainer = ({ children, data }: { children: React.ReactNode; data: any[] }) => {
  return <div className="relative">{children}</div>
}

export const Chart = ({ children }: { children: React.ReactNode }) => {
  return <svg className="w-full h-full">{children}</svg>
}

export const ChartLegend = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`flex items-center gap-2 ${className}`}> {children}</div>
}

export const ChartLegendItem = ({ name, color }: { name: string; color: string }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-xs text-muted-foreground">{name}</span>
    </div>
  )
}

export const ChartGrid = ({ horizontal, vertical }: { horizontal?: boolean; vertical?: boolean }) => {
  return null
}

export const ChartLine = ({
  dataKey,
  stroke,
  strokeWidth,
  yAxisId,
  dot,
  activeDot,
}: { dataKey: string; stroke: string; strokeWidth: number; yAxisId: string; dot: any; activeDot: any }) => {
  return null
}

export const ChartXAxis = ({ dataKey }: { dataKey: string }) => {
  return null
}

export const ChartYAxis = ({
  yAxisId,
  domain,
  tickCount,
  label,
  orientation,
}: { yAxisId: string; domain: number[]; tickCount: number; label: any; orientation?: string }) => {
  return null
}

export const ChartArea = ({
  dataKey,
  fill,
  fillOpacity,
  yAxisId,
  stroke,
}: { dataKey: string; fill: string; fillOpacity: number; yAxisId: string; stroke?: string }) => {
  return null
}

export const ChartBar = ({
  dataKey,
  fill,
  yAxisId,
  barSize,
}: { dataKey: string; fill: string; yAxisId: string; barSize: number }) => {
  return null
}

export const ChartTooltip = ({ content }: { content: React.ReactNode }) => {
  return null
}

export const ChartTooltipContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="rounded-md border bg-popover p-4 shadow-sm">{children}</div>
}

