import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import React from 'react';
import { GenreTitle } from './GenreTitle';

test('check genre title', () => {
    const { getByTestId } = render(<GenreTitle title="Horreur" />);
    const title = getByTestId("genre-title");
    expect(title).toBeInTheDocument();
});