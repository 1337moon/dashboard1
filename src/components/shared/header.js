import React from 'react';

const Header = () => {
    return (
        <div>
            <h1 className="text-3xl mb-4">This is Header or Sidebar</h1>
            <div className="w-max h-screen bg-amber-50 p-5 sticky top-0">
                <ul className="menu bg-base-200 rounded-box w-56">
                    <li className="text-orange-400"><a>User</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;