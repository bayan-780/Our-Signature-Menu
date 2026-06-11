
document.addEventListener("DOMContentLoaded", () => {
    // استهداف حاوية الزر بالكامل لضمان التقاط النقرة حتى لو ضغط على الأيقونة
    const categoryItems = document.querySelectorAll(".category-item");
    const productCards = document.querySelectorAll(".product-card");

    categoryItems.forEach(item => {
        item.addEventListener("click", () => {
            // الحصول على النص من فقرة <p> الداخلية وتجهيزه للمقارنة
            const textElement = item.querySelector("p");
            if (!textElement) return;
            
            const selectedCategory = textElement.textContent.toLowerCase().trim();

            // --- إضافة تفاعل: تغيير لون الزر النشط ---
            categoryItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            // --- تصفية المنتجات ---
            productCards.forEach(card => {
                const productCategory = card.getAttribute("data-category");

                if (selectedCategory === "all" || productCategory === selectedCategory) {
                    card.style.display = "flex"; // إظهار
                } else {
                    card.style.display = "none"; // إخفاء
                }
            });
        });
    });
});
