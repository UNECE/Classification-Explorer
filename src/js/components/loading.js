import React from 'react';
import { capitalizeFirstLetter } from '../utils';

export default function Loading({ from, plural }) {
  return (
    <span>
      <span className="fa fa-spinner fa-pulse fa-2x"></span>
      &nbsp; {capitalizeFirstLetter(from)} {plural ? 'are' : 'is'} loading
    </span>
  );
}
