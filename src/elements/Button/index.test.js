import React from 'react';
import {getByText, render} from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom';

import Button from './index';

test("Should not allowed click button if isDisabled is present", () => {
    const {container} = render(<Button isDisabled></Button>);

    // ekspetasikan bagaimana pengecekannya
    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});


test("Should render loading/spinner", () => {
    const {container, getByText} = render(<Button isLoading></Button>);

    // regex(/..kata../) -> untuk mencari apakah ada kata loading
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
});


test("Should render <a></a> tag", () => {
    const {container} = render(<Button type='link' isExternal></Button>);

    // ekspetasikan bagaimana pengecekannya
    expect(container.querySelector("a")).toBeInTheDocument();
});


test("Should render <Link></Link> component", () => {
    const {container} = render(
    <Router>
        <Button href='' type='link'></Button>
    </Router>);

    // ekspetasikan bagaimana pengecekannya
    expect(container.querySelector("a")).toBeInTheDocument();
});