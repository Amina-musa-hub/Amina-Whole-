import React, { useState } from 'react';

function YourFormComponent() {
  const [formData, setFormData] = useState({
    // افترض أن هذه هي الحقول الخاصة بك
    name: '',
    email: '',
    message: ''
  });
  
  const [showForm, setShowForm] = useState(true);

  // دالة التعامل مع تغيير المدخلات
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // دالة التعامل مع الإرسال
  const handleSubmit = (e) => {
    e.preventDefault(); // ⭐ لمنع إعادة تحميل الصفحة
    
    // 1. إرسال البيانات إلى console
    console.log('Form Data:', formData);
    
    // 2. إخفاء الفورم
    setShowForm(false);
    
    // 3. (اختياري) تفريغ الحقول
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          {/* الحقول الخاصة بك */}
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>✅ تم إرسال البيانات بنجاح! تفحص الـ console.</p>
          {/* (اختياري) زر لإعادة عرض الفورم */}
          <button onClick={() => setShowForm(true)}>
            إرسال بيانات جديدة
          </button>
        </div>
      )}
    </div>
  );
}

export default YourFormComponent;