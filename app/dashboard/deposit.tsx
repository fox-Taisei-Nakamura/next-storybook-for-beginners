'use client';

import { Card } from '@mui/material';

import { DepositData } from './types';

export default function Deposit({ data }: Readonly<DepositData>) {
  return (
    <Card className="flex h-48 p-2">
      <h1>Deposit{data.amount}</h1>
    </Card>
  );
}
