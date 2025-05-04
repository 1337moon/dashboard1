import React from 'react';

const User = () => {
    
    return (
        <div className="bg-white">
            <h1 className="text-4xl text-[#073838] mb-4">
                This is User Page
            </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Button</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>012887522</td>
                        <td>xyz</td>
                        <td>
                            <button className="btn">show</button>
                            <button className="btn">edit</button>
                            <button className="btn">delete</button>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td>9656546454</td>
                        <td>dfh</td>
                        <td>
                            <button className="btn">show</button>
                            <button className="btn">edit</button>
                            <button className="btn">delete</button>
                        </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>65478865</td>
                        <td>pdo</td>
                        <td>
                            <button className="btn">show</button>
                            <button className="btn">edit</button>
                            <button className="btn">delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;