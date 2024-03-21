import React, { ReactNode, createContext, useContext } from 'react';
import { Coordinate } from '../util/types';
import { NameType, Payload as TooltipPayload, ValueType } from '../component/DefaultTooltipContent';

export type TooltipContextProviderProps = {
  active: boolean;
  coordinate: Coordinate;
  label: string;
  payload: Array<TooltipPayload<ValueType, NameType>>;
  children?: ReactNode;
};

export const TooltipContext = createContext<TooltipContextProviderProps | null>(null);

/**
 * Use this at the root of a chart where you want to have Tooltip
 * @param props tooltip context props
 * @returns ReactNode
 */
export const TooltipPropsProvider = (props: TooltipContextProviderProps) => {
  const { children, ...rest } = props;
  return <TooltipContext.Provider value={rest}>{children}</TooltipContext.Provider>;
};

/**
 * Use this hook in Tooltip, or anywhere else where you want to read the current Tooltip items.
 * @return all tooltip props
 */
export function useTooltip(): TooltipContextProviderProps | null {
  const tooltipProps = useContext(TooltipContext);
  return tooltipProps;
}
