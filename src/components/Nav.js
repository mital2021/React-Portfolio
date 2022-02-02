
import React from 'react';

function Nav(props) {
    const tabs = ['About Me', 'Contact', 'Portfolio', 'Resume'];    
    return (
        <div>
            <ul id="nav" className="nav bar">
                {tabs.map(currentTab => (
                    <li key={currentTab} >
                        <a
                            href={'#' + currentTab.toLowerCase()}
                            onClick={() => props.handlePageChange(currentTab)}
                            className={

                                props.currentPage === currentTab ? `nav-link active text-success` : 'nav-link'
                            }
                        >
                            {currentTab}
                        </a>
                    </li>
                ))
                }
            </ul >
        </div>
    );
}

export default Nav;