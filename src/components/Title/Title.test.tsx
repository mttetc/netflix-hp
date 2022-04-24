import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import React from 'react';
import { Title } from './Title';

test('check genre title', () => {
    const { getByTestId } = render(<Title title="Horreur" />);
    const title = getByTestId("title");
    expect(title).toBeInTheDocument();
});