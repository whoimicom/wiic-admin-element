import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // 模拟从本地存储或其他地方获取认证状态
        const token = localStorage.getItem('authToken');
        setIsAuthenticated(!!token);
    }, []);

    return isAuthenticated;
};

export default useAuth;