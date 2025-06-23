const vocabData = [
  {
    "topic": "Gia đình",
    "word": "father",
    "vn": "bố",
    "ipa": "/ˈfɑːðər/"
  },
  {
    "topic": "Gia đình",
    "word": "mother",
    "vn": "mẹ",
    "ipa": "/ˈmʌðər/"
  },
  {
    "topic": "Gia đình",
    "word": "brother",
    "vn": "anh trai / em trai",
    "ipa": "/ˈbrʌðər/"
  },
  {
    "topic": "Gia đình",
    "word": "sister",
    "vn": "chị gái / em gái",
    "ipa": "/ˈsɪstər/"
  },
  {
    "topic": "Gia đình",
    "word": "uncle",
    "vn": "chú / bác / cậu",
    "ipa": "/ˈʌŋ.kəl/"
  },
  {
    "topic": "Gia đình",
    "word": "aunt",
    "vn": "cô / dì",
    "ipa": "/ɑːnt/"
  },
  {
    "topic": "Gia đình",
    "word": "grandfather",
    "vn": "ông",
    "ipa": "/ˈɡrændˌfɑːðər/"
  },
  {
    "topic": "Gia đình",
    "word": "grandmother",
    "vn": "bà",
    "ipa": "/ˈɡræn(d)ˌmʌðər/"
  },
  {
    "topic": "Gia đình",
    "word": "cousin",
    "vn": "anh em họ",
    "ipa": "/ˈkʌzən/"
  },
  {
    "topic": "Gia đình",
    "word": "baby",
    "vn": "em bé",
    "ipa": "/ˈbeɪ.bi/"
  },
  {
    "topic": "Trường học",
    "word": "student",
    "vn": "học sinh",
    "ipa": "/ˈstjuː.dənt/"
  },
  {
    "topic": "Trường học",
    "word": "teacher",
    "vn": "giáo viên",
    "ipa": "/ˈtiː.tʃər/"
  },
  {
    "topic": "Trường học",
    "word": "book",
    "vn": "sách",
    "ipa": ""
  },
  {
    "topic": "Trường học",
    "word": "pen",
    "vn": "bút mực",
    "ipa": "/pen/"
  },
  {
    "topic": "Trường học",
    "word": "pencil",
    "vn": "bút chì",
    "ipa": "/ˈpen.səl/"
  },
  {
    "topic": "Trường học",
    "word": "eraser",
    "vn": "tẩy",
    "ipa": "/ɪˈreɪ.zər/"
  },
  {
    "topic": "Trường học",
    "word": "notebook",
    "vn": "vở",
    "ipa": "/ˈnəʊt.bʊk/"
  },
  {
    "topic": "Trường học",
    "word": "board",
    "vn": "bảng",
    "ipa": "/bɔːd/"
  },
  {
    "topic": "Trường học",
    "word": "school",
    "vn": "trường",
    "ipa": ""
  },
  {
    "topic": "Trường học",
    "word": "classroom",
    "vn": "lớp học",
    "ipa": "/ˈklɑːs.ruːm/"
  },
  {
    "topic": "Màu sắc",
    "word": "red",
    "vn": "màu đỏ",
    "ipa": "/red/"
  },
  {
    "topic": "Màu sắc",
    "word": "blue",
    "vn": "màu xanh dương",
    "ipa": "/bluː/"
  },
  {
    "topic": "Màu sắc",
    "word": "green",
    "vn": "màu xanh lá",
    "ipa": "/ɡriːn/"
  },
  {
    "topic": "Màu sắc",
    "word": "yellow",
    "vn": "màu vàng",
    "ipa": "/ˈjel.əʊ/"
  },
  {
    "topic": "Màu sắc",
    "word": "black",
    "vn": "màu đen",
    "ipa": "/blæk/"
  },
  {
    "topic": "Màu sắc",
    "word": "white",
    "vn": "màu trắng",
    "ipa": "/waɪt/"
  },
  {
    "topic": "Màu sắc",
    "word": "pink",
    "vn": "màu hồng",
    "ipa": "/pɪŋk/"
  },
  {
    "topic": "Màu sắc",
    "word": "orange",
    "vn": "màu cam",
    "ipa": "/ˈɒr.ɪndʒ/"
  },
  {
    "topic": "Màu sắc",
    "word": "purple",
    "vn": "màu tím",
    "ipa": "/ˈpɜː.pəl/"
  },
  {
    "topic": "Màu sắc",
    "word": "brown",
    "vn": "màu nâu",
    "ipa": "/braʊn/"
  },
  {
    "topic": "Thời tiết",
    "word": "sunny",
    "vn": "trời nắng",
    "ipa": "/ˈsʌn.i/"
  },
  {
    "topic": "Thời tiết",
    "word": "rainy",
    "vn": "trời mưa",
    "ipa": "/ˈreɪ.ni/"
  },
  {
    "topic": "Thời tiết",
    "word": "cloudy",
    "vn": "trời nhiều mây",
    "ipa": "/ˈklaʊ.di/"
  },
  {
    "topic": "Thời tiết",
    "word": "stormy",
    "vn": "trời bão",
    "ipa": "/ˈstɔː.mi/"
  },
  {
    "topic": "Thời tiết",
    "word": "windy",
    "vn": "trời nhiều gió",
    "ipa": "/ˈwɪn.di/"
  },
  {
    "topic": "Thời tiết",
    "word": "snowy",
    "vn": "trời có tuyết",
    "ipa": "/ˈsnəʊ.i/"
  },
  {
    "topic": "Thời tiết",
    "word": "hot",
    "vn": "nóng",
    "ipa": "/hɒt/"
  },
  {
    "topic": "Thời tiết",
    "word": "cold",
    "vn": "lạnh",
    "ipa": "/kəʊld/"
  },
  {
    "topic": "Thời tiết",
    "word": "foggy",
    "vn": "sương mù",
    "ipa": "/ˈfɒɡ.i/"
  },
  {
    "topic": "Thời tiết",
    "word": "humid",
    "vn": "ẩm ướt",
    "ipa": "/ˈhjuː.mɪd/"
  },
  {
    "topic": "Động vật",
    "word": "dog",
    "vn": "chó",
    "ipa": ""
  },
  {
    "topic": "Động vật",
    "word": "cat",
    "vn": "mèo",
    "ipa": ""
  },
  {
    "topic": "Động vật",
    "word": "bird",
    "vn": "chim",
    "ipa": "/bɜːd/"
  },
  {
    "topic": "Động vật",
    "word": "fish",
    "vn": "cá",
    "ipa": "/fɪʃ/"
  },
  {
    "topic": "Động vật",
    "word": "tiger",
    "vn": "hổ",
    "ipa": "/ˈtaɪ.ɡər/"
  },
  {
    "topic": "Động vật",
    "word": "lion",
    "vn": "sư tử",
    "ipa": "/ˈlaɪ.ən/"
  },
  {
    "topic": "Động vật",
    "word": "elephant",
    "vn": "voi",
    "ipa": "/ˈel.ɪ.fənt/"
  },
  {
    "topic": "Động vật",
    "word": "monkey",
    "vn": "khỉ",
    "ipa": "/ˈmʌŋ.ki/"
  },
  {
    "topic": "Động vật",
    "word": "horse",
    "vn": "ngựa",
    "ipa": "/hɔːs/"
  },
  {
    "topic": "Động vật",
    "word": "bear",
    "vn": "gấu",
    "ipa": "/beə(r)/"
  },
  {
    "topic": "Thực phẩm",
    "word": "apple",
    "vn": "táo",
    "ipa": ""
  },
  {
    "topic": "Thực phẩm",
    "word": "banana",
    "vn": "chuối",
    "ipa": "/bəˈnɑː.nə/"
  },
  {
    "topic": "Thực phẩm",
    "word": "bread",
    "vn": "bánh mì",
    "ipa": ""
  },
  {
    "topic": "Thực phẩm",
    "word": "rice",
    "vn": "cơm / gạo",
    "ipa": "/raɪs/"
  },
  {
    "topic": "Thực phẩm",
    "word": "meat",
    "vn": "thịt",
    "ipa": "/miːt/"
  },
  {
    "topic": "Thực phẩm",
    "word": "egg",
    "vn": "trứng",
    "ipa": "/eɡ/"
  },
  {
    "topic": "Thực phẩm",
    "word": "milk",
    "vn": "sữa",
    "ipa": "/mɪlk/"
  },
  {
    "topic": "Thực phẩm",
    "word": "cheese",
    "vn": "pho mát",
    "ipa": "/tʃiːz/"
  },
  {
    "topic": "Thực phẩm",
    "word": "water",
    "vn": "nước",
    "ipa": "/ˈwɔː.tər/"
  },
  {
    "topic": "Thực phẩm",
    "word": "juice",
    "vn": "nước ép",
    "ipa": "/dʒuːs/"
  },
  {
    "topic": "Cảm xúc",
    "word": "happy",
    "vn": "vui",
    "ipa": ""
  },
  {
    "topic": "Cảm xúc",
    "word": "sad",
    "vn": "buồn",
    "ipa": "/sæd/"
  },
  {
    "topic": "Cảm xúc",
    "word": "angry",
    "vn": "tức giận",
    "ipa": "/ˈæŋ.ɡri/"
  },
  {
    "topic": "Cảm xúc",
    "word": "scared",
    "vn": "sợ hãi",
    "ipa": "/skeəd/"
  },
  {
    "topic": "Cảm xúc",
    "word": "tired",
    "vn": "mệt mỏi",
    "ipa": "/ˈtaɪəd/"
  },
  {
    "topic": "Cảm xúc",
    "word": "excited",
    "vn": "phấn khích",
    "ipa": "/ɪkˈsaɪ.tɪd/"
  },
  {
    "topic": "Cảm xúc",
    "word": "nervous",
    "vn": "lo lắng",
    "ipa": "/ˈnɜː.vəs/"
  },
  {
    "topic": "Cảm xúc",
    "word": "bored",
    "vn": "chán nản",
    "ipa": "/bɔːd/"
  },
  {
    "topic": "Cảm xúc",
    "word": "confused",
    "vn": "bối rối",
    "ipa": "/kənˈfjuzd/"
  },
  {
    "topic": "Cảm xúc",
    "word": "calm",
    "vn": "bình tĩnh",
    "ipa": "/kɑːm/"
  },
  {
    "topic": "Cơ thể",
    "word": "head",
    "vn": "đầu",
    "ipa": "/hed/"
  },
  {
    "topic": "Cơ thể",
    "word": "hand",
    "vn": "bàn tay",
    "ipa": "/hænd/"
  },
  {
    "topic": "Cơ thể",
    "word": "leg",
    "vn": "chân",
    "ipa": "/leɡ/"
  },
  {
    "topic": "Cơ thể",
    "word": "foot",
    "vn": "bàn chân",
    "ipa": "/fʊt/"
  },
  {
    "topic": "Cơ thể",
    "word": "eye",
    "vn": "mắt",
    "ipa": "/aɪ/"
  },
  {
    "topic": "Cơ thể",
    "word": "ear",
    "vn": "tai",
    "ipa": "/ɪər/"
  },
  {
    "topic": "Cơ thể",
    "word": "nose",
    "vn": "mũi",
    "ipa": "/nəʊz/"
  },
  {
    "topic": "Cơ thể",
    "word": "mouth",
    "vn": "miệng",
    "ipa": "/maʊθ/"
  },
  {
    "topic": "Cơ thể",
    "word": "arm",
    "vn": "cánh tay",
    "ipa": "/ɑːm/"
  },
  {
    "topic": "Cơ thể",
    "word": "back",
    "vn": "lưng",
    "ipa": "/bæk/"
  },
  {
    "topic": "Số đếm",
    "word": "one",
    "vn": "một",
    "ipa": "/wʌn/"
  },
  {
    "topic": "Số đếm",
    "word": "two",
    "vn": "hai",
    "ipa": "/tuː/"
  },
  {
    "topic": "Số đếm",
    "word": "three",
    "vn": "ba",
    "ipa": "/θriː/"
  },
  {
    "topic": "Số đếm",
    "word": "four",
    "vn": "bốn",
    "ipa": "/fɔː(r)/"
  },
  {
    "topic": "Số đếm",
    "word": "five",
    "vn": "năm",
    "ipa": "/faɪv/"
  },
  {
    "topic": "Số đếm",
    "word": "six",
    "vn": "sáu",
    "ipa": "/sɪks/"
  },
  {
    "topic": "Số đếm",
    "word": "seven",
    "vn": "bảy",
    "ipa": "/ˈsev.ən/"
  },
  {
    "topic": "Số đếm",
    "word": "eight",
    "vn": "tám",
    "ipa": "/eɪt/"
  },
  {
    "topic": "Số đếm",
    "word": "nine",
    "vn": "chín",
    "ipa": "/naɪn/"
  },
  {
    "topic": "Số đếm",
    "word": "ten",
    "vn": "mười",
    "ipa": "/ten/"
  },
  {
    "topic": "Thời gian",
    "word": "morning",
    "vn": "buổi sáng",
    "ipa": "/ˈmɔː.nɪŋ/"
  },
  {
    "topic": "Thời gian",
    "word": "afternoon",
    "vn": "buổi chiều",
    "ipa": "/ˌɑːf.təˈnuːn/"
  },
  {
    "topic": "Thời gian",
    "word": "evening",
    "vn": "buổi tối",
    "ipa": "/ˈiːv.nɪŋ/"
  },
  {
    "topic": "Thời gian",
    "word": "night",
    "vn": "ban đêm",
    "ipa": "/naɪt/"
  },
  {
    "topic": "Thời gian",
    "word": "today",
    "vn": "hôm nay",
    "ipa": "/təˈdeɪ/"
  },
  {
    "topic": "Thời gian",
    "word": "tomorrow",
    "vn": "ngày mai",
    "ipa": "/təˈmɒr.əʊ/"
  },
  {
    "topic": "Thời gian",
    "word": "yesterday",
    "vn": "hôm qua",
    "ipa": "/ˈjes.tə.deɪ/"
  },
  {
    "topic": "Thời gian",
    "word": "week",
    "vn": "tuần",
    "ipa": "/wiːk/"
  },
  {
    "topic": "Thời gian",
    "word": "month",
    "vn": "tháng",
    "ipa": "/mʌnθ/"
  },
  {
    "topic": "Thời gian",
    "word": "year",
    "vn": "năm",
    "ipa": "/jɪər/"
  }
];