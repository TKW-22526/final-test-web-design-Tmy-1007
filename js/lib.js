const productlist = [
    {
        id: "01",
        name: "Quý tộc",
        price: 250,
        image: "../assets/images/Classic.jpg",
        productlink: "https://stylethehaven.com/romantic-shabby-chic-living-room-decor/",
        desc: "Luxury / Vintage / Charm / Elegance",
        detail: "Chủ đề Quý tộc mang đến không gian sang trọng lấy cảm hứng từ phong cách châu Âu cổ điển. Ánh sáng dịu nhẹ, nội thất tinh tế cùng các chi tiết trang trí cầu kỳ tạo nên cảm giác ấm áp và đẳng cấp. Đây là lựa chọn hoàn hảo cho những ai yêu thích vẻ đẹp vượt thời gian, sự yên bình và nét nghệ thuật trong cuộc sống. Sự kết hợp giữa gam màu cổ điển và chất liệu mềm mại giúp căn phòng vừa lãng mạn vừa thanh lịch. Dù để thư giãn, đọc sách hay tận hưởng những khoảnh khắc yên tĩnh, không gian này luôn mang lại cảm giác thoải mái và sang trọng."
    },
    {
        id: "02",
        name: "Cổ tích mộng mơ",
        price: 180,
        image: "../assets/images/fairy.jpg",
        productlink: "https://www.pinterest.com/pin/19773685858567637/",
        desc: "Soft / Romantic / Gentle / Poetic",
        detail: "Chủ đề Cổ tích mộng mơ được thiết kế với bầu không khí thơ mộng và đầy chất cổ tích. Những gam màu pastel nhẹ nhàng, chất liệu mềm mại cùng các chi tiết trang trí tinh tế tạo nên cảm giác thư giãn và bình yên. Không gian này phù hợp với những ai yêu thích sự lãng mạn, dịu dàng và mộng mơ. Ánh sáng ấm áp cùng cách bài trí ấm cúng khiến mọi góc nhỏ đều trở nên đầy cảm hứng. Đây là nơi lý tưởng để nghỉ ngơi, tận hưởng những phút giây yên tĩnh hoặc lưu giữ những bức ảnh mang phong cách ngọt ngào và trong trẻo."
    },
    {
        id: "03",
        name: "Nhà hiện đại",
        price: 100,
        image: "../assets/images/homeroom.jpg",
        productlink: "https://www.pinterest.com/pin/648940627574557652/",
        desc: "Peaceful / Cozy / Chill / Modern",
        detail: "Chủ đề Nhà hiện đại kết hợp sự tối giản và tiện nghi để tạo nên một không gian sống hiện đại, thoải mái. Nội thất gọn gàng, gam màu trung tính và cách sắp xếp khoa học mang lại cảm giác thư thái nhưng vẫn đầy phong cách. Căn phòng phù hợp với những người yêu thích sự hiện đại và tinh tế. Ánh sáng tự nhiên cùng những chi tiết ấm cúng giúp không gian luôn gần gũi và dễ chịu. Dù làm việc, học tập hay nghỉ ngơi, nơi đây đều hỗ trợ sự tập trung và mang lại cảm giác như đang ở chính ngôi nhà của mình."
    },
    {
        id: "04",
        name: "Thể loại Đường phố",
        price: 150,
        image: "../assets/images/streetroom.jpg",
        productlink: "https://decorsly.com/indian-living-room-designs/?utm_source=Pinterest&utm_medium=organic",
        desc: "Rebellious / Edgy / Vibrant / Urban",
        detail: "Chủ đề Đường phố thể hiện nguồn năng lượng trẻ trung và cá tính của văn hóa đường phố hiện đại. Những chi tiết trang trí lấy cảm hứng từ graffiti, ánh đèn nổi bật và nội thất phong cách công nghiệp tạo nên không gian mạnh mẽ và đầy sức sống. Căn phòng dành cho những người yêu thích sự tự do, sáng tạo và khác biệt. Mỗi góc nhỏ đều phản ánh cá tính riêng, sự tự tin và tinh thần nghệ thuật. Đây là nơi lý tưởng để chụp ảnh, gặp gỡ bạn bè hoặc tận hưởng một phong cách sống năng động đậm chất thành thị."
    },
    {
        id: "05",
        name: "Cổ trang",
        price: 250,
        image: "../assets/images/historicalroom.jpg",
        productlink: "https://modern-living-spaces.de/wohnzimmer-deko-asiatischer-stil/?utm_source=Pinterest&utm_medium=organic",
        desc: "Traditional / Mystical / Oriental / Graceful",
        detail: "Chủ đề Cổ trang tái hiện vẻ đẹp của văn hóa truyền thống và nghệ thuật cổ điển. Lấy cảm hứng từ kiến trúc phương Đông cùng những giá trị lịch sử lâu đời, căn phòng sở hữu các chi tiết trang trí tinh xảo, gam màu ấm áp và không khí trang nhã. Không gian mang đến cảm giác yên bình, huyền bí và giàu chiều sâu văn hóa. Đây là lựa chọn phù hợp cho những ai yêu thích vẻ đẹp cổ kính và những giá trị truyền thống. Mỗi món đồ nội thất đều góp phần tạo nên một không gian thanh lịch, nơi quá khứ và hiện tại hòa quyện một cách hài hòa."
    },
    {
        id: "06",
        name: "Baby",
        price: 130,
        image: "../assets/images/baby.jpg",
        productlink: "https://cf.shopee.vn/file/a43aa895a71549391a426cb5022cb315",
        desc: "Cute / Innocent / Soft / Cheerful",
        detail: "Chủ đề Baby được thiết kế để lưu giữ những khoảnh khắc đáng yêu và ngây thơ nhất của tuổi thơ. Với những gam màu pastel nhẹ nhàng, đồ chơi dễ thương và cách bài trí ấm áp, căn phòng mang đến cảm giác vui tươi và tràn đầy yêu thương. Mỗi góc nhỏ đều được chăm chút cẩn thận để làm nổi bật những nụ cười hồn nhiên và những kỷ niệm đáng nhớ của bé. Ánh sáng dịu nhẹ cùng các chi tiết trang trí đáng yêu tạo nên môi trường thoải mái cho cả trẻ em và gia đình. Đây là không gian hoàn hảo để chụp ảnh và lưu giữ những dấu mốc đầu đời đầy ý nghĩa."
    }
];

function addProduct(id, name, price, image, hyperLink)
{
	//Tạo một product item
	//1. Tạo khung chứa 1 item
	const productItem = document.createElement("div");
	productItem.setAttribute("class","product-item col m-4");

	//2. Tạo khung chưa hình
	const productImage = document.createElement("div");
	productImage.setAttribute("class","product-image h-75");

	//3. Tạo đối tượng hình ảnh
	const Image = document.createElement("img");
	Image.setAttribute("src", image);
	Image.setAttribute("alt", name);
	Image.setAttribute("class", "img-fluid object-fit-cover h-100");

	//4. Gán hình vào khung
	productImage.appendChild(Image);

	//5. Tạo khung chưa thông tin
	const productInfo = document.createElement("div");
	productInfo.setAttribute("class","product-info h-25 text-center");

	//Tạo paragraph 1
	const productName = document.createElement("p");
	const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

	//Tạo paragraph 2
	const productPrice = document.createElement("p");
	const productPriceText = document.createTextNode(price);
	productPrice.appendChild(productPriceText);

	//Tạo hyperLink
	const productLink = document.createElement("a");
	const productLinkText = document.createTextNode("Xem chi tiết");

	productLink.appendChild(productLinkText);
	productLink.setAttribute("href", hyperLink +"?id="+id);
	productLink.setAttribute("class", "btn btn-info");

	//Gắn paragraph 1, 2 và Link vào khung 
	productInfo.appendChild(productName);
	productInfo.appendChild(productPrice);
	productInfo.appendChild(productLink);

	//6. Gắn khung hình và thông tin vào product item
	productItem.appendChild(productImage);
	productItem.appendChild(productInfo);

	//Gắn product item vào product list
	document.getElementById("product-list").appendChild(productItem);
}

function showProduct(products)
{
	const container = document.getElementById('product-list');

	container.innerHTML = "";

	products.forEach(item => {
		//Tạo element cha bằng createElement
		const productItem = document.createElement('div');

		//productItem.setAttribute("class", "product-item col-md-3 col-sm-6");
		//Sử dụng Template Literal nạp dữ liệu vào 
		productItem.innerHTML = `
			<div class="product-image overflow-hidden">
				<img src="${item.image}" alt="${item.name}" class="img-fluid object-fit-cover">
			</div>
			<div class="product-info p-2 text-center">
				<p class="product-name mb-1">${item.name}</p>
				<p class="product-price fw-bold mb-2">
					${item.price.toLocaleString('vi-VN')}.000 Đồng/Giờ
				</p>
				<a href= "../html/chi-tiet.html?id=${item.id}" class= "btn btn-sm btn-outline-primary w-100">Xem chi tiết
				</a>
			</div>
		`;
        container.appendChild(productItem);
	});
}

showProduct(productlist);