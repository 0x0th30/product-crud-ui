import { Text } from "@chakra-ui/react";

export interface CounterProps {
  label: string;
  value: number;
}

export default function Counter({ label, value }: CounterProps) {
  return (
    <Text className="font-md text-zinc-400">
      {label} <span className="font-bold text-zinc-600">{value}</span>
    </Text>
  );
}
