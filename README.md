
https://lustrous-blini-0ab08b.netlify.app/

مكون حالة الطقس (Topic) - تطبيق طقس تفاعلي متعدد اللغات

الوظائف الرئيسية:
- عرض بيانات الطقس الحالية (درجة الحرارة، الوصف، الحد الأدنى والأقصى)
- دعم التبديل بين اللغتين العربية والإنجليزية
- عرض الوقت المباشر مع دعم التوقيت المحلي
- تصميم بطاقة طقس جذابة مع أيقونات الطقس

التقنيات المستخدمة:
- React Hooks (useState, useEffect)
- axios لطلبات HTTP مع إدارة الإلغاء
- نظام الترجمة i18n متعدد اللغات
- مكتبة moment.js للتعامل مع التواريخ
- Material-UI للعناصر والتنسيق

المميزات:
- جلب بيانات الطقس من OpenWeather API
- واجهة متجاوبة مع دعم اتجاه النص (RTL/LTR)
- تخزين تفضيلات اللغة في localStorage
- عرض أيقونات الطقس الديناميكية
- ساعة حية مع تحديث مباشر

- # Run Project

- _install_ npm
- _install_ :
{
  "name": "apireact",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@mui/icons-material": "^7.3.4",
    "@mui/material": "^7.3.4",
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.13.0",
    "build": "^0.1.4",
    "i18next": "^21.0.0",
    "i18next-browser-languagedetector": "^8.2.0",
    "i18next-http-backend": "^3.0.2",
    "moment": "^2.30.1",
    "moment-timezone": "^0.6.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-i18next": "^11.18.6",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
