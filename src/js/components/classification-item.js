import React from 'react';
import { Link } from 'react-router';
import { uriToLink } from '../router-mapping';

export default function ClassificationItem({ item, code, label }) {
  return (
    <Link to={uriToLink.itemDetails(item)}>
      {code} - {label}
    </Link>
  );
}
