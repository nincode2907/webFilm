const films = [
    {
        name: "NIGHTMARE ALLEY",
        img: 1,
        id: 1,
        content: "Hẻm Ác Mộng - Nightmare Alley xoay quanh câu chuyện về người đàn ông Stanton Carlisle đầy quyến rũ nhưng lại vô cùng kém may mắn, đã cấu kết với cặp vợ chồng giàu có Zeena và Pete tại lễ hội lưu động. Tại đây Stanton Carlisle đã thành công giành được tấm vé vàng và sử dụng chúng bằng những kiến thức anh có được để nắm bắt cuộc sống của tầng lớp giàu có tại New York tại năm 1940.",
    },
    {
        name: "COME PLAY WITH ME",
        img: 2,
        id: 2,
        content: "Come Play with Me là một bộ phim kinh dị siêu nhiên của Mexico năm 2021 của đạo diễn Adrián García Bogliano. Cốt truyện của phim theo chân Sofi, một bảo mẫu trẻ phải đối đầu với một con quỷ độc ác tên là Mormo để cứu những đứa trẻ mà cô chăm sóc.",
    },
    {
        name: "MẾN GÁI MIỀN TÂY",
        img: 3,
        id: 3,
        content: "Bối cảnh câu chuyện diễn ra sau web drama 12 năm, khi cô và chồng là Nhớ (Hoàng Nguyên) đã cùng nhau vượt qua rất nhiều thử thách và có được cuộc sống hạnh phúc bên nhau. Nhưng chính lúc này, sóng gió lại nổi lên. Nhớ bắt đầu không chấp nhận được giới tính thật sự của vợ mình và có mối quan hệ với người con gái khác.",
    },
    {
        name: "CRACKED",
        img: 4,
        id: 4,
        content: "Phim kể về câu chuyện của Luja (Pat Chayanit), con gái của một họa sĩ nổi tiếng. Vì một lý do nào đó, người cha họa sĩ của Ruja bất ngờ tự kết liễu đời mình, để lại bộ sưu tập tranh đồ sộ và hoành tráng cho con gái. Tuy nhiên, bộ sưu tập có hai bức chân dung của hai người phụ nữ vô cùng bí ẩn.\n\nRuja muốn được trả tiền để khôi phục bức tranh, vì vậy cô đã tìm đến chuyên gia phục chế nghệ thuật Tim (Nick Khun). Tuy nhiên, tình hình không đơn giản như bạn nghĩ. Trong quá trình làm gia sư, Luza và đồng đội thường xuyên gặp phải những hiện tượng kỳ lạ và đáng sợ. Dần dần, bí ẩn về chân dung của hai nàng cũng được hé lộ.",
    },
    {
        name: "THE BAD GUYS",
        img: 5,
        id: 5,
        content: "Những kẻ xấu xa là bộ phim hoạt hình máy tính thuộc thể loại hài-tội phạm của Mỹ được DreamWorks Animation sản xuất và phân phối bởi Universal",
    },
    {
        name: "THE LOST CITY",
        img: 6,
        id: 6,
        content: "The Lost City là một bộ phim hài phiêu lưu hành động của Mỹ năm 2022 do anh em nhà Nee đạo diễn, người đồng viết kịch bản với Oren Uziel và Dana Fox, từ một câu chuyện do Seth Gordon hình thành.",
    },
    {
        name: "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS",
        img: 7,
        id: 7,
        content: "Doctor Strange, với sự giúp đỡ của các đồng minh thần bí cả cũ và mới, vượt qua các thực tại luân phiên nguy hiểm và đáng sợ của Đa vũ trụ để đối đầu với một kẻ thù mới bí ẩn."
    },
    {
        name: "NGHỀ SIÊU DỄ",
        img: 8,
        id: 8,
        content: "Nghề siêu dễ là một bộ phim điện ảnh hài hành động của Việt Nam ra mắt năm 2022 do Võ Thanh Hòa đạo diễn. Phim được CJ HK Entertainment và Thu Trang Entertainment chịu trách nhiệm sản xuất và CJ E&M giữ vai trò phân phối. Phim là phiên bản làm lại của bộ phim điện ảnh Hàn Quốc Nghề siêu khó ra mắt năm 2019.",
    },
    {
        name: "JUJUTSU KAISEN 0: THE MOVIE",
        img: 9,
        id: 9,
        content: "Jujutsu Kaisen 0 là một bộ phim hoạt hình giả tưởng đen tối năm 2021 của Nhật Bản, dựa trên loạt manga Jujutsu Kaisen 0, phần tiền truyện của loạt manga Jujutsu Kaisen, cả hai đều do Gege Akutami tạo ra.",
    },
    {
        name: "FANTASTIC BEASTS: THE SECRETS OF DUMBLEDORE",
        img: 10,
        id: 10,
        content: "Sinh vật huyền bí: Những bí mật của Dumbledore là bộ phim kỳ ảo ra mắt năm 2022 được đạo diễn bởi David Yates với kịch bản do J. K. Rowling và Steve Kloves chắp bút, dựa trên chính câu truyện của Rowling. Phim là sự hợp tác sản xuất giữa hai nước Hoa Kỳ và Vương quốc Anh.",
    },
    {
        name: "QUA BỂN LÀM CHI",
        img: 11,
        id: 11,
        content:'Phim theo chân Tuấn (Thuận Nguyễn) – chàng sinh viên khoa tài chính điển trai đến Mỹ và sinh sống cùng chú Út (Quang Minh) của mình. Tại đây, anh đã gặp trợ lý của chú mình là Leo (Duy Khánh) - một anh chàng “say" anh như điếu đổ và có cuộc đụng độ đầy bất ngờ với Julie (Phương TiTi) ngay tại…phòng tắm! Một ngày, anh và Julie bất ngờ nhận được một đề nghị đầy cám dỗ từ Leo...và mọi việc bắt đầu rối tung lên theo một cách không ai lường trước được.',
    },
    {
        name: "MORBIUS",
        img: 12,
        id: 12,
        content:'Sau khi bị mắc một căn bệnh hiếm gặp về máu, vị giáo sư Michael Morbius đã cố gắng tạo một thứ thuốc để tự điều trị cho bản thân mình. Nhưng cũng vì thứ thuốc đó mà ông đã trở thành một dạng ma cà rồng. Từ đây, ông phải trải qua nhiều khó khăn và đau khổ, từng bước trở thành một siêu anh hùng khát máu.',
    },
    {
        name: "Alienoid: Cuộc Chiến Xuyên Không",
        img: 13,
        id: 13,
        content:'Năm 2022, hai người ngoài hành tinh là Guard (Kim Woo-bin) và Thunder sinh sống tại Trái Đất đang tìm kiếm những tù nhân vượt ngục, vốn bị họ giam giữ trong cơ thể con người. Cảnh sát Moon (So Ji-sub) vô tình trở thành đối tượng bị truy đuổi mà không rõ lý do. Cùng lúc đó, ở triều đại Goryeo hơn 630 năm về trước, pháp sư xui xẻo Muruk (Ryu Jun-yeol) và “cô gái bắn sấm sét” Ean (Kim Tae-ri) đang cố gắng tranh giành một thanh gươm thần huyền thoại. Cuộc chiến khốc liệt ấy còn có sự tham gia của hai phù thủy hắc ám là Madam Black (Yum Jung-ah) và Mr. Blue (Jo Woo-Jin), cùng kẻ đeo mặt nạ bí ẩn Jajang (Kim Eui-sung). Một cánh cổng thời gian xuất hiện và mở ra sự kết nối giữa hai thời đại, tạo nên tình huống hỗn loạn chưa từng thấy.',
    },
    {
        name: "Điều Ước Cuối Cùng Của Tù Nhân 2037",
        img: 14,
        id: 14,
        content:'Ở tuổi 19, thay vì đến trường như bao bạn bè đồng trang lứa, Yoon-yeong phải nỗ lực hết mình để đi làm thêm kiếm tiền. Khao khát một cuộc sống tốt đẹp hơn cho mình và người mẹ khiếm thính, Yoon-yeong đặt mục tiêu thi đỗ kỳ thi công chức lên trên hết. Bất ngờ và trớ trêu thay, một sự cố khủng khiếp xảy ra, biến Yoon-yeong từ nạn nhân đáng thương trở thành kẻ giết người. Trong thời điểm tuyệt vọng và bất lực nhất, Yoon-yeong đã gặp những người chị em trong phòng giam số 12. Đằng sau mỗi người là một câu chuyện khác nhau, nhưng họ đã trao nhau tình yêu thương và niềm hy vọng để cùng hướng về một tương lai tươi sáng ngoài song sắt nhà tù.',
    },
    {
        name: "Sát Thủ Đối Đầu",
        img: 15,
        id: 15,
        content:'Ladybug (Brad Pitt) - một sát thủ lành nghề vừa trở lại sau khoảng thời gian nghỉ hưu. Anh nhận nhiệm vụ từ một phụ nữ bí ẩn là thu hồi chiếc vali trên chuyến tàu cao tốc ở Nhật Bản. Những tưởng đây sẽ là phi vụ dễ ăn thì một loạt biến cố ập đến. Ladybug phải đối mặt với vô số thế lực khác nhau trên chiếc tàu hỏa cùng nhắm vào chiếc vali kia. Đối thủ của anh lần lượt là Lemon (Brian Tyree Henry), Kimura (Andrew Koji), Hornet (Zazie Beetz), Prince (Joey King) và Tangerine (Aaron Taylor-Johnson). Mỗi người đều có những âm mưu và cách thức hoạt động riêng dẫn đến một cục diện vô cùng rối ren.',
    },
    {
        name: "Nhập Hồn",
        img: 16,
        id: 16,
        content:'Bộ phim dựa trên sự kiện có thật về lời nguyền gia phả tại Mardin, một thành phố thuộc Thổ Nhĩ Kỳ.',
    },
    {
        name: "Thor: Tình Yêu Và Sấm Sét",
        img: 17,
        id: 17,
        content: 'Vốn từng là một chiến binh hùng mạnh của Asgard, trải qua vô số trận chiến lớn nhỏ nhưng sau sự kiện trong Avengers: Endgame (2019) cùng vô số mất mát, Thần Sấm không còn muốn theo đuổi con đường siêu anh hùng. Từ đây, anh lên đường tìm ra ý nghĩa của cuộc sống và nhìn nhận lại bản thân mình.',
    },
    {
        name: "Dân Chơi Không Sợ Con Rơi",
        img: 18,
        id: 18,
        content:'Quân, một dân chơi miệt vườn với tài “sát gái” thượng hạng, bỗng một ngày phải gánh lấy "cục nợ con rơi" từ bạn gái cũ. Được sự trợ giúp "ba phần đắc lực bảy phần phá đám" của Tám Mánh, Quân dần mất hết hy vọng tìm lại mẹ cho đứa bé và dần trở thành người cha hoàn hảo trong mắt Bé Thỏ. Cuộc sống đầy sắc màu và tiếng cười của hai cha con bị đặt trước thử thách lớn lao khi người mẹ mà Bé Thỏ ngày đêm mong ngóng cuối cùng cũng xuất hiện…',
    },
    {
        name: "Duyên Ma",
        img: 19,
        id: 19,
        content:'“Duyên ma” bắt nguồn từ cơ duyên kì lạ của Minh (Kiều Minh Tuấn) khi vô cớ trở thành hồn ma và gặp Ngọc (Ngọc Trinh). Mọi chuyện sẽ không có gì đặc biệt nếu Ngọc không nhìn thấy Minh và cùng với “tam ca 3 con ma” hay phá bĩnh nhưng tốt bụng giúp anh từ linh hồn vô gia cư quen dần cách làm ma. Tuy nhiên, ma tính không bằng tình yêu tính, Ngọc và Minh đem lòng cảm mến nhau. Cũng từ đây đã “kích hoạt” không biết bao nhiêu rắc rối, nhất là khi có sự xuất hiện của nàng ma bí ẩn Bạch Cát.',
    },
    {
        name: "Không",
        img: 20,
        id: 20,
        content: 'Câu chuyện xoay quanh đôi vợ chồng sở hữu chuồng ngựa và một trang trại mang tên Haywood tại California. Cùng với những cư dân của thị trấn biệt lập này, bộ đôi đã chứng kiến một sự kiện siêu nhiên bí ẩn và bất thường, đến từ đám mây lớn, lơ lửng trên bầu trời.',
    },
    {
        name: "Hạ Cánh Khẩn Cấp",
        img: 21,
        id: 21,
        content:'Hạ Cánh Khẩn Cấp quy tụ dàn diễn viên đình đám bậc nhất xứ Hàn, bao gồm Song Kang-ho, Lee Byung-hun, Jeon Do-yeon, Kim Nam-Gil và Yim Si-wan, Park Hae-Joon. Bộ phim xoay quanh chuyến bay mang số hiệu KI501 của hãng hàng không Sky Korea, khởi hành từ sân bay quốc tế Incheon tới Honolulu, Hawaii. Không lâu sau khi máy bay cất cánh, một hành khách bắt đầu có những biểu hiện lạ và tử vong trước sự bàng hoàng của mọi người. Một virus lạ với tốc độ lây lan chóng mặt đã xâm nhập lên máy bay, tất cả chìm trong hỗn loạn và sợ hãi. Trong tình huống ngàn cân treo sợi tóc, một tuyên bố đề nghị hạ cánh khẩn cấp được đưa ra. Trên độ cao 8,534 mét, số phận của hơn 150 con người bao gồm cả các hành khách và phi hành đoàn sẽ ra sao?',
    },
    {
        name: "Vô Diện Sát Nhân",
        img: 22,
        id: 22,
        content: "Liên tục mơ thấy bị một kẻ sát nhân không mặt mũi giết hàng đêm, cuộc sống của Phương Anh bị xáo trộn. Thế nhưng, điều kinh hoàng hơn còn xảy ra, khi tên Vô Diện Sát Nhân bước ra đời thực và truy sát cô. Hắn thực sự tồn tại hay chỉ là nỗi ám ảnh của Phương Anh?"
    },
    {
        name: "Dragon Ball Super: SUPER HERO",
        img: 23,
        id: 23,
        content: "Đội quân Ruy Băng Đỏ đã bị Son Goku tiêu diệt. Thế nhưng, những kẻ kế nghiệp của chúng đã tạo ra hai chiến binh Android mới là Gamma 1 và Gamma 2. Hai Android này tự nhận mình là “Siêu anh hùng”. Chúng bắt đầu tấn công Piccolo và Gohan… Mục tiêu của Đội quân Ruy Băng Đỏ mới này là gì? Trước nguy cơ cận kề, đã đến lúc các siêu anh hùng thực thụ phải thức tỉnh!",
    },
    {
        name: "Quái Thú",
        img: 24,
        id: 24,
        content: "Người cha đơn thân là tiến sĩ Nate Daniels do Idris Elba thủ vai, cùng hai cô con gái trong chuyến đi dã ngoại tới khu bảo tồn thiên nhiên được quản lý bởi người bạn cũ của gia đình, và cũng là nhà sinh vật học, chuyên nghiên cứu về động vật hoang dã. Thế nhưng, những gì bắt đầu một cuộc hành trình gắn kết tình cảm gia đình và giải tỏa căng thẳng lại trở thành một cuộc chiến sinh tồn đáng sợ khi một loài thú khát máu coi tất cả là kẻ thù, bắt đầu rình rập họ.",
    },
];

export default films