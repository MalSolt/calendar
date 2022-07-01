import { Popover as ReactPopover, PopoverProps } from 'react-tiny-popover'

export const Popover = (props: PopoverProps) => (
  <ReactPopover
    {...props}
    positions={['top', 'bottom', 'left', 'right']}
    containerStyle={{ ...props.containerStyle, zIndex: '1000' }}
  >
    {props.children}
  </ReactPopover>
)
