import React, { Component } from "react";
import { Coins } from './data';

export const Table: React.FC = () => {
    return (
        <div>
            <h1 id='title'>React ts Dynamic Table Biggest CryptoCurrecies</h1>
            <table id='coins'>
                <tbody>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Change</th>
                    {
                        Coins.map((coin) => {
                            const { id, name, value, change } = coin
                            return (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{value}</td>
                                    <td>{change}</td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};