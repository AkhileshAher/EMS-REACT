import employees from './employees.json';
import admin from './admin.json';
import fs from 'fs';

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}


export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return { employees, admin }
}

export const removeLocalStorageItem = (...arr) => {
    arr.map((item) => {
        localStorage.removeItem(item);
    })
}

export const writeJson = (data) => {
    localStorage.setItem("employees",data);
}
