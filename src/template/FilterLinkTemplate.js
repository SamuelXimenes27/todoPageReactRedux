import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../constants/TodoConstant';


const FooterComponent = () => (
    <div>
        <span>Filter: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
)

export default FooterComponent;
