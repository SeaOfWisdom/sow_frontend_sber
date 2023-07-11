import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PaginationContainer } from '../../styleComponents/utilsStyles/PaginationStyle';

const Pagination = ({ total=20, active = 1, link='/', count=6, search_params= '' }) => { 
	const item_count = count ? count : 6.0;
    const navigate = useNavigate()
	const p = total / item_count;
	const pc = p > parseInt(p) ? parseInt(p) + 1 : p;
	useEffect(() => {
		window.scrollTo(0, 0);
		if (pc < active || active < 1) {
			navigate(`./?page=1`);
		}
	}, [active]); 
	return (
		<>
        <PaginationContainer>
			<div className="pagination">
				<ul>
					<li className='left'>
						{active > 1 ? (
							<Link to={link + (active - 1) + search_params}>
								<img src='/img/arrow.svg' />
							</Link>
						) : (
							<span className="passive">
                                <img src='/img/arrow.svg' />
							</span>
						)}
					</li>
					{pc === active && active >= 4 ? (
						<li>
							<Link to={link + (active - 3) + search_params}>{active - 3}</Link>
						</li>
					) : null}
					{pc - active < 2 && pc >= 3 && active - 2 > 0 ? (
						<li>
							<Link to={link + (active - 2) + search_params}>{active - 2}</Link>
						</li>
					) : null}
					{active > 1 && pc !== 1 ? (
						<li>
							<Link to={link + (active - 1) + search_params}>{active - 1}</Link>
						</li>
					) : null}
					<li className='active'>
						<span>{active}</span>
					</li>
					{pc - active >= 1 && pc >= 2 ? (
						<li>
							<Link to={link + (active + 1) + search_params}>{active + 1}</Link>
						</li>
					) : null}
					{pc - active >= 2 && pc >= 3 ? (
						<li>
							<Link to={link + (active + 2) + search_params}>{active + 2}</Link>
						</li>
					) : null}
					{active === 1 && pc >= 4 ? (
						<li>
							<Link to={link + (active + 3) + search_params}>{active + 3}</Link>
						</li>
					) : null}
					<li className='right'>
						{active < pc ? (
							<Link to={link + (active + 1) + search_params}>
								<img src='/img/arrow.svg' />
							</Link>
						) : (
							<span className="passive">
								
								<img src='/img/arrow.svg' />

							</span>
						)}
					</li>
				</ul>
			</div>
        </PaginationContainer>
		</>
	);
};
export default Pagination;