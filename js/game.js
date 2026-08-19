const ALL = [{"part":"PART 2","jp":"グランドハンドリング","id":"Ground Handling","reading":"グランドハンドリング"},{"part":"PART 2","jp":"航空機","id":"Pesawat terbang","reading":"こうくうき"},{"part":"PART 2","jp":"飛ぶ","id":"Terbang","reading":"とぶ"},{"part":"PART 2","jp":"準備","id":"Persiapan","reading":"じゅんび"},{"part":"PART 2","jp":"燃料","id":"Bahan bakar","reading":"ねんりょう"},{"part":"PART 2","jp":"搭載","id":"Pemuatan / pemasangan","reading":"とうさい"},{"part":"PART 2","jp":"機内","id":"Di dalam pesawat","reading":"きない"},{"part":"PART 2","jp":"荷物","id":"Barang bawaan / bagasi","reading":"にもつ"},{"part":"PART 2","jp":"積み込み","id":"Memuat / memasukkan barang","reading":"つみこみ"},{"part":"PART 2","jp":"旅客機","id":"Pesawat penumpang","reading":"りょかくき"},{"part":"PART 2","jp":"定期便","id":"Penerbangan reguler","reading":"ていきびん"},{"part":"PART 2","jp":"到着","id":"Kedatangan","reading":"とうちゃく"},{"part":"PART 2","jp":"出発","id":"Keberangkatan","reading":"しゅっぱつ"},{"part":"PART 2","jp":"時間","id":"Waktu","reading":"じかん"},{"part":"PART 2","jp":"取り卸し","id":"Membongkar / menurunkan barang","reading":"とりおろし"},{"part":"PART 2","jp":"乗客","id":"Penumpang","reading":"じょうきゃく"},{"part":"PART 2","jp":"掃除","id":"Membersihkan","reading":"そうじ"},{"part":"PART 2","jp":"安全","id":"Keamanan / keselamatan","reading":"あんぜん"},{"part":"PART 2","jp":"快適","id":"Nyaman","reading":"かいてき"},{"part":"PART 2","jp":"目的地","id":"Tujuan","reading":"もくてきち"},{"part":"PART 2","jp":"速度","id":"Kecepatan","reading":"そくど"},{"part":"PART 2","jp":"オペレータ","id":"Operator","reading":"オペレータ"},{"part":"PART 2","jp":"装着","id":"Pemasangan","reading":"そうちゃく"},{"part":"PART 2","jp":"合図","id":"Sinyal","reading":"あいず"},{"part":"PART 2","jp":"形状","id":"Bentuk","reading":"けいじょう"},{"part":"PART 2","jp":"回転","id":"Rotasi","reading":"かいてん"},{"part":"PART 2","jp":"周囲","id":"Sekitar","reading":"しゅうい"},{"part":"PART 2","jp":"連携","id":"Koordinasi","reading":"れんけい"},{"part":"PART 2","jp":"実施","id":"Pelaksanaan","reading":"じっし"},{"part":"PART 2","jp":"重量","id":"Berat","reading":"じゅうりょう"},{"part":"PART 2","jp":"声","id":"Suara","reading":"こえ"},{"part":"PART 2","jp":"業者","id":"Pihak pelaksana","reading":"ぎょうしゃ"},{"part":"PART 2","jp":"落下","id":"Jatuh","reading":"らっか"},{"part":"PART 2","jp":"防止","id":"Pencegahan","reading":"ぼうし"},{"part":"PART 2","jp":"ロック","id":"Kunci","reading":"ロック"},{"part":"PART 2","jp":"エンジン","id":"Mesin","reading":"えんじん"},{"part":"PART 2","jp":"後方","id":"Belakang","reading":"こうほう"},{"part":"PART 2","jp":"貨物室","id":"Ruang kargo","reading":"かもつしつ"},{"part":"PART 2","jp":"牽引","id":"Penarikan","reading":"けんいん"},{"part":"PART 2","jp":"翼","id":"Sayap","reading":"つばさ"},{"part":"PART 2","jp":"指差呼称","id":"Penunjukan dan penyebutan","reading":"しさこしょう"},{"part":"PART 2","jp":"搬入","id":"Pengiriman","reading":"はんにゅう"},{"part":"PART 2","jp":"順序","id":"Urutan","reading":"じゅんじょ"},{"part":"PART 2","jp":"照合","id":"Verifikasi","reading":"しょうごう"},{"part":"PART 2","jp":"積込","id":"Pemuatan","reading":"つみこみ"},{"part":"PART 2","jp":"種類","id":"Jenis","reading":"しゅるい"},{"part":"PART 2","jp":"手荷物","id":"Bagasi tangan","reading":"てにもつ"},{"part":"PART 2","jp":"点検","id":"Inspeksi","reading":"てんけん"},{"part":"PART 2","jp":"損傷","id":"Kerusakan","reading":"そんしょう"},{"part":"PART 2","jp":"行き先","id":"Tujuan","reading":"いきさき"},{"part":"PART 2","jp":"誤送","id":"Pengiriman salah","reading":"ごそう"},{"part":"PART 2","jp":"報告","id":"Pelaporan","reading":"ほうこく"},{"part":"PART 2","jp":"変形","id":"Deformasi","reading":"へんけい"},{"part":"PART 2","jp":"汚損","id":"Kontaminasi","reading":"おそん"},{"part":"PART 2","jp":"指定","id":"Penunjukan","reading":"してい"},{"part":"PART 2","jp":"脱落","id":"Terjatuh","reading":"だつらく"},{"part":"PART 2","jp":"転倒","id":"Terbalik","reading":"てんとう"},{"part":"PART 2","jp":"適切","id":"Tepat","reading":"てきせつ"},{"part":"PART 2","jp":"処置","id":"Penanganan","reading":"しょち"},{"part":"PART 2","jp":"天候","id":"Cuaca","reading":"てんこう"},{"part":"PART 2","jp":"防水","id":"Tahan air","reading":"ぼうすい"},{"part":"PART 2","jp":"雨水","id":"Air hujan","reading":"あまみず"},{"part":"PART 2","jp":"浸入","id":"Masuk","reading":"しんにゅう"},{"part":"PART 2","jp":"飲料水","id":"Air minum","reading":"いんりょうすい"},{"part":"PART 2","jp":"手洗い水","id":"Air cuci tangan","reading":"てあらいすい"},{"part":"PART 2","jp":"飛行前","id":"Sebelum penerbangan","reading":"ひこうまえ"},{"part":"PART 2","jp":"胴体","id":"Badan pesawat","reading":"どうたい"},{"part":"PART 2","jp":"装備","id":"Perlengkapan","reading":"そうび"},{"part":"PART 2","jp":"補給","id":"Pengisian","reading":"ほきゅう"},{"part":"PART 2","jp":"搭載量","id":"Jumlah muatan","reading":"とうさいりょう"},{"part":"PART 2","jp":"給水バルブ","id":"Katup pengisian air","reading":"きゅうすいばるぶ"},{"part":"PART 2","jp":"閉める","id":"Menutup","reading":"しめる"},{"part":"PART 2","jp":"漏れ","id":"Kebocoran","reading":"もれ"},{"part":"PART 2","jp":"気温","id":"Suhu","reading":"きおん"},{"part":"PART 2","jp":"凍り付く","id":"Membeku","reading":"こおりつく"},{"part":"PART 2","jp":"氷","id":"Es","reading":"こおり"},{"part":"PART 2","jp":"部品","id":"Bagian","reading":"ぶひん"},{"part":"PART 2","jp":"確認事項","id":"Hal-hal yang harus dikonfirmasi","reading":"かくにんじこう"},{"part":"PART 2","jp":"最後","id":"Terakhir","reading":"さいご"},{"part":"PART 3","jp":"ラバトリー","id":"Kamar kecil","reading":"らばとりー"},{"part":"PART 3","jp":"数","id":"Jumlah","reading":"すう"},{"part":"PART 3","jp":"大きさ","id":"Ukuran","reading":"おおきさ"},{"part":"PART 3","jp":"国","id":"Negara","reading":"こく"},{"part":"PART 3","jp":"内線用","id":"Untuk penerbangan domestik","reading":"ないせんよう"},{"part":"PART 3","jp":"国際線用","id":"Untuk penerbangan internasional","reading":"こくさいせんよう"},{"part":"PART 3","jp":"違い","id":"Perbedaan","reading":"ちがい"},{"part":"PART 3","jp":"距離","id":"Jarak","reading":"きょり"},{"part":"PART 3","jp":"最大","id":"Maksimum","reading":"さいだい"},{"part":"PART 3","jp":"旅客","id":"Penumpang","reading":"りょかく"},{"part":"PART 3","jp":"汚水","id":"Air kotor","reading":"おすい"},{"part":"PART 3","jp":"機外","id":"Di luar pesawat","reading":"きがい"},{"part":"PART 3","jp":"排出","id":"Pembuangan","reading":"はいしゅつ"},{"part":"PART 3","jp":"通常","id":"Biasanya","reading":"つうじょう"},{"part":"PART 3","jp":"トイレット","id":"Toilet","reading":"といれっと"},{"part":"PART 3","jp":"所定量","id":"Jumlah yang ditentukan","reading":"しょていりょう"},{"part":"PART 3","jp":"水","id":"Air","reading":"みず"},{"part":"PART 3","jp":"殺菌","id":"Sterilisasi","reading":"さっきん"},{"part":"PART 3","jp":"消臭剤","id":"Penghilang bau","reading":"しょうしゅうざい"},{"part":"PART 3","jp":"GSE","id":"Peralatan dukungan darat","reading":"GSE"},{"part":"PART 3","jp":"清水用タンク","id":"Tangki untuk air bersih","reading":"しみずようたんく"},{"part":"PART 3","jp":"給排出ホース","id":"Selang pengisian dan pembuangan","reading":"きゅうはいしゅつほーす"},{"part":"PART 3","jp":"給水装置","id":"Alat penyedia air","reading":"きゅうすいそうち"},{"part":"PART 3","jp":"圧力","id":"Tekanan","reading":"あつりょく"},{"part":"PART 3","jp":"空調","id":"Sistem pendingin / pemanas udara","reading":"くうちょう"},{"part":"PART 3","jp":"低圧","id":"Tekanan rendah","reading":"ていあつ"},{"part":"PART 3","jp":"空気","id":"Udara","reading":"くうき"},{"part":"PART 3","jp":"エプロン","id":"Area apron di bandara","reading":"エプロン"},{"part":"PART 3","jp":"舗装","id":"Aspal","reading":"ほそう"},{"part":"PART 3","jp":"地上","id":"Di darat","reading":"ちじょう"},{"part":"PART 3","jp":"供給","id":"Penyediaan","reading":"きょうきゅう"},{"part":"PART 3","jp":"設備","id":"Peralatan","reading":"せつび"},{"part":"PART 3","jp":"設置","id":"Pemasangan","reading":"せっち"},{"part":"PART 3","jp":"駐機","id":"Parkir pesawat","reading":"ちゅうき"},{"part":"PART 3","jp":"スポット","id":"Spot / area","reading":"スポット"},{"part":"PART 3","jp":"埋め込む","id":"Menanam / menyisipkan","reading":"うめこむ"},{"part":"PART 3","jp":"エアコン","id":"AC","reading":"エアコン"},{"part":"PART 3","jp":"ピット","id":"Pit / area khusus","reading":"ピット"},{"part":"PART 3","jp":"空気取出し口","id":"Lubang pengambilan udara","reading":"くうきとりだしぐち"},{"part":"PART 3","jp":"利用","id":"Penggunaan","reading":"りよう"},{"part":"PART 3","jp":"太い","id":"Tebal","reading":"ふとい"},{"part":"PART 3","jp":"ホース","id":"Selang","reading":"ホース"},{"part":"PART 3","jp":"出す","id":"Mengeluarkan","reading":"だす"},{"part":"PART 3","jp":"ねじれ","id":"Kerut","reading":"ねじれ"},{"part":"PART 3","jp":"直す","id":"Memperbaiki","reading":"なおす"},{"part":"PART 3","jp":"機体側","id":"Sisi pesawat","reading":"きたいがわ"},{"part":"PART 3","jp":"カップリング","id":"Coupling","reading":"カップリング"},{"part":"PART 3","jp":"アクセス","id":"Akses","reading":"アクセス"},{"part":"PART 3","jp":"パネル","id":"Panel","reading":"パネル"},{"part":"PART 3","jp":"付近","id":"Sekitar","reading":"ふきん"},{"part":"PART 3","jp":"移動","id":"Pindah","reading":"いどう"},{"part":"PART 3","jp":"注意","id":"Perhatian","reading":"ちゅうい"},{"part":"PART 3","jp":"接続","id":"Koneksi","reading":"せつぞく"},{"part":"PART 3","jp":"機体","id":"Pesawat","reading":"きたい"},{"part":"PART 3","jp":"破損","id":"Kerusakan","reading":"はそん"},{"part":"PART 3","jp":"恐れ","id":"Kekhawatiran","reading":"おそれ"},{"part":"PART 3","jp":"必要","id":"Kebutuhan","reading":"ひつよう"},{"part":"PART 3","jp":"次","id":"Selanjutnya","reading":"つぎ"},{"part":"PART 3","jp":"開く","id":"Membuka","reading":"ひらく"},{"part":"PART 3","jp":"所定","id":"Ditentukan","reading":"しょてい"},{"part":"PART 3","jp":"スイッチ","id":"Saklar","reading":"スイッチ"},{"part":"PART 3","jp":"入れる","id":"Memasukkan","reading":"いれる"},{"part":"PART 3","jp":"送る","id":"Mengirim","reading":"おくる"},{"part":"PART 3","jp":"場所","id":"Tempat","reading":"ばしょ"},{"part":"PART 3","jp":"個数","id":"Jumlah","reading":"こすう"},{"part":"PART 3","jp":"普通","id":"Biasa","reading":"ふつう"},{"part":"PART 3","jp":"結合","id":"Penggabungan","reading":"けつごう"},{"part":"PART 3","jp":"金具","id":"Klem","reading":"かなぐ"},{"part":"PART 3","jp":"サイズ","id":"Ukuran","reading":"さいず"},{"part":"PART 3","jp":"出口","id":"Keluar","reading":"でぐち"},{"part":"PART 3","jp":"作る","id":"Membuat","reading":"つくる"},{"part":"PART 3","jp":"重要","id":"Penting","reading":"じゅうよう"},{"part":"PART 3","jp":"空港","id":"Bandara","reading":"くうこう"},{"part":"PART 3","jp":"ビル","id":"Gedung","reading":"ビル"},{"part":"PART 3","jp":"エネルギー","id":"Energi","reading":"エネルギー"},{"part":"PART 3","jp":"施設","id":"Fasilitas","reading":"しせつ"},{"part":"PART 3","jp":"地域","id":"Daerah","reading":"ちいき"},{"part":"PART 3","jp":"冷暖房","id":"Pemanasan dan pendinginan","reading":"れいだんぼう"},{"part":"PART 3","jp":"プラント","id":"Pabrik","reading":"プラント"},{"part":"PART 3","jp":"冷水","id":"Air dingin","reading":"れいすい"},{"part":"PART 3","jp":"夏","id":"Musim panas","reading":"なつ"},{"part":"PART 3","jp":"蒸気","id":"Uap","reading":"じょうき"},{"part":"PART 3","jp":"冬","id":"Musim dingin","reading":"ふゆ"},{"part":"PART 3","jp":"熱交換器","id":"Penukar panas","reading":"ねつこうかんき"},{"part":"PART 3","jp":"送風機","id":"Kipas angin","reading":"そうふうき"},{"part":"PART 3","jp":"仕分け作業","id":"Pekerjaan penyortiran","reading":"しわけさぎょう"},{"part":"PART 3","jp":"搭乗","id":"Naik pesawat","reading":"とうじょう"},{"part":"PART 3","jp":"手続き","id":"Prosedur","reading":"てつづき"},{"part":"PART 3","jp":"預かる","id":"Menyimpan","reading":"あずかる"},{"part":"PART 3","jp":"クレーム・タグ","id":"Label klaim","reading":"クレーム・タグ"},{"part":"PART 3","jp":"ベルトコンベア","id":"Conveyor belt","reading":"ベルトコンベア"},{"part":"PART 3","jp":"行き先","id":"Tujuan","reading":"いきさき"},{"part":"PART 3","jp":"仕分け場","id":"Area penyortiran","reading":"しわけば"},{"part":"PART 3","jp":"経由地","id":"Titik transit","reading":"けいゆち"},{"part":"PART 3","jp":"タグ","id":"Label","reading":"たぐ"},{"part":"PART 3","jp":"バルク・カート","id":"Kereta barang","reading":"バルク・カート"},{"part":"PART 3","jp":"積み付け","id":"Pemindahan muatan","reading":"つみつけ"},{"part":"PART 3","jp":"機側","id":"Sisi pesawat","reading":"きそく"},{"part":"PART 3","jp":"向かう","id":"Menuju","reading":"むかう"},{"part":"PART 3","jp":"特殊手荷物タグ","id":"Label bagasi khusus","reading":"とくしゅてにもつたぐ"},{"part":"PART 3","jp":"ファーストクラス","id":"Kelas satu","reading":"ファーストクラス"},{"part":"PART 3","jp":"ビジネスクラス","id":"Kelas bisnis","reading":"ビジネスクラス"},{"part":"PART 3","jp":"取扱注意","id":"Perhatian dalam penanganan","reading":"とりあつかいちゅうい"},{"part":"PART 3","jp":"内容物","id":"Isi barang","reading":"ないようぶつ"},{"part":"PART 3","jp":"ペット","id":"Hewan peliharaan","reading":"ペット"},{"part":"PART 3","jp":"ケージ","id":"Kandang","reading":"ケージ"},{"part":"PART 3","jp":"日陰","id":"Tempat teduh","reading":"ひかげ"},{"part":"PART 3","jp":"風通し","id":"Ventilasi","reading":"かぜとおし"},{"part":"PART 3","jp":"保管","id":"Penyimpanan","reading":"ほかん"},{"part":"PART 3","jp":"重量物","id":"Barang berat","reading":"じゅうりょうぶつ"},{"part":"PART 3","jp":"腰","id":"Pinggang","reading":"こし"},{"part":"PART 3","jp":"ケガ","id":"Cedera","reading":"ケガ"},{"part":"PART 3","jp":"連絡","id":"Kontak","reading":"れんらく"},{"part":"PART 3","jp":"情報","id":"Informasi","reading":"じょうほう"},{"part":"PART 3","jp":"位置","id":"Posisi","reading":"いち"},{"part":"PART 3","jp":"作業員","id":"Pekerja","reading":"さぎょういん"},{"part":"PART 3","jp":"時刻","id":"Waktu","reading":"じこく"},{"part":"PART 3","jp":"定時性","id":"Ketepatan waktu","reading":"ていじせい"},{"part":"PART 3","jp":"確保","id":"Jaminan","reading":"かくほ"},{"part":"PART 3","jp":"早くて的確","id":"Cepat dan akurat","reading":"はやくててきかく"},{"part":"PART 3","jp":"判断","id":"Penilaian","reading":"はんだん"},{"part":"PART 3","jp":"優先順位","id":"Prioritas","reading":"ゆうせんじゅんい"},{"part":"PART 3","jp":"専用","id":"Khusus","reading":"せんよう"},{"part":"PART 3","jp":"完了後","id":"Setelah selesai","reading":"かんりょうご"},{"part":"PART 3","jp":"荷台","id":"Bak barang","reading":"にだい"},{"part":"PART 3","jp":"業者","id":"Kontraktor","reading":"ぎょうしゃ"},{"part":"PART 3","jp":"発進","id":"Peluncuran","reading":"はっしん"},{"part":"PART 3","jp":"ドライバー","id":"Pengemudi","reading":"ドライバー"},{"part":"PART 3","jp":"高速","id":"Kecepatan tinggi","reading":"こうそく"},{"part":"PART 3","jp":"輸送","id":"Pengiriman","reading":"ゆそう"},{"part":"PART 3","jp":"年々","id":"Tahun demi tahun","reading":"ねんねん"},{"part":"PART 3","jp":"拡大","id":"Perluasan","reading":"かくだい"},{"part":"PART 3","jp":"一般","id":"Umum","reading":"いっぱん"},{"part":"PART 3","jp":"生鮮","id":"Segar","reading":"せいせん"},{"part":"PART 3","jp":"食料品","id":"Produk makanan","reading":"しょくりょうひん"},{"part":"PART 3","jp":"宅配","id":"Pengiriman ke rumah","reading":"たくはい"},{"part":"PART 3","jp":"引越し","id":"Pindahan","reading":"ひっこし"},{"part":"PART 3","jp":"大型","id":"Besar","reading":"おおがた"},{"part":"PART 3","jp":"機械","id":"Mesin","reading":"きかい"},{"part":"PART 3","jp":"広範囲","id":"Luas","reading":"こうはんい"},{"part":"PART 3","jp":"大型化","id":"Pembesaran ukuran","reading":"おおがたか"},{"part":"PART 3","jp":"輸送量","id":"Volume pengiriman","reading":"ゆそうりょう"},{"part":"PART 3","jp":"貨物専用機","id":"Pesawat khusus kargo","reading":"かもつせんようき"},{"part":"PART 3","jp":"可能","id":"Mungkin","reading":"かのう"},{"part":"PART 3","jp":"受託","id":"Penugasan","reading":"じゅたく"},{"part":"PART 3","jp":"小口","id":"Pengiriman kecil","reading":"こぐち"},{"part":"PART 3","jp":"代理店","id":"Agen","reading":"だいりてん"},{"part":"PART 3","jp":"発行","id":"Penerbitan","reading":"はっこう"},{"part":"PART 3","jp":"ケア","id":"Perawatan","reading":"ケア"},{"part":"PART 3","jp":"マーク","id":"Tanda","reading":"マーク"},{"part":"PART 4","jp":"識別","id":"Identifikasi","reading":"しきべつ"},{"part":"PART 4","jp":"積み込む","id":"Memuat","reading":"つみこむ"},{"part":"PART 4","jp":"搭載","id":"Pemasangan","reading":"とうさい"},{"part":"PART 4","jp":"運送","id":"Pengiriman","reading":"うんそう"},{"part":"PART 4","jp":"約款","id":"Ketentuan pengiriman","reading":"やっかん"},{"part":"PART 4","jp":"顧客","id":"Pelanggan","reading":"こきゃく"},{"part":"PART 4","jp":"荷送人","id":"Pengirim","reading":"におくりにん"},{"part":"PART 4","jp":"承諾","id":"Persetujuan","reading":"しょうだく"},{"part":"PART 4","jp":"申込む","id":"Mendaftar","reading":"もうしこむ"},{"part":"PART 4","jp":"契約","id":"Kontrak","reading":"けいやく"},{"part":"PART 4","jp":"成立","id":"Terbentuk","reading":"せいりつ"},{"part":"PART 4","jp":"フォークリフト","id":"Forklift","reading":"フォークリフト"},{"part":"PART 4","jp":"空港内","id":"Di dalam bandara","reading":"くうこうない"},{"part":"PART 4","jp":"使用","id":"Penggunaan","reading":"しよう"},{"part":"PART 4","jp":"エンジン式","id":"Sistem mesin bensin","reading":""},{"part":"PART 4","jp":"電気モーター式","id":"Sistem motor listrik","reading":""},{"part":"PART 4","jp":"種類","id":"Jenis","reading":"しゅるい"},{"part":"PART 4","jp":"貨物","id":"Kargo","reading":"かもつ"},{"part":"PART 4","jp":"手荷物","id":"Barang bawaan","reading":"てにもつ"},{"part":"PART 4","jp":"搭降載","id":"Muat dan bongkar","reading":"とうこうさい"},{"part":"PART 4","jp":"自動車","id":"Mobil","reading":"じどうしゃ"},{"part":"PART 4","jp":"車両重量","id":"Berat kendaraan","reading":"しゃりょうじゅうりょう"},{"part":"PART 4","jp":"駆動力","id":"Daya penggerak","reading":"くどうりょく"},{"part":"PART 4","jp":"保税地域","id":"Wilayah bebas bea","reading":"ほぜいちいき"},{"part":"PART 4","jp":"輸送","id":"Pengangkutan","reading":"ゆそう"},{"part":"PART 4","jp":"発生","id":"Terjadi","reading":"はっせい"},{"part":"PART 4","jp":"保税運送","id":"Pengangkutan dalam zona bebas bea","reading":"ほぜいうんそう"},{"part":"PART 4","jp":"仮陸揚げ","id":"Pemuatan sementara di darat","reading":"かりりくあげ"},{"part":"PART 4","jp":"機内","id":"Di dalam pesawat","reading":"きない"},{"part":"PART 4","jp":"作業","id":"Pekerjaan","reading":"さぎょう"},{"part":"PART 4","jp":"クリーニング","id":"Pembersihan","reading":"クリーニング"},{"part":"PART 4","jp":"行先","id":"Tujuan","reading":"いきさき"},{"part":"PART 4","jp":"機種","id":"Jenis pesawat","reading":"きしゅ"},{"part":"PART 4","jp":"基本情報","id":"Informasi dasar","reading":"きほんじょうほう"},{"part":"PART 4","jp":"確認","id":"Konfirmasi","reading":"かくにん"},{"part":"PART 4","jp":"美しさ","id":"Keindahan","reading":"うつくしさ"},{"part":"PART 4","jp":"清潔さ","id":"Kebersihan","reading":"せいけつさ"},{"part":"PART 4","jp":"保つ","id":"Menjaga","reading":"たもつ"},{"part":"PART 4","jp":"実施","id":"Pelaksanaan","reading":"じっし"},{"part":"PART 4","jp":"航空機整備","id":"Perawatan pesawat","reading":"こうくうきせいび"},{"part":"PART 4","jp":"特別作業","id":"Pekerjaan khusus","reading":"とくべつさぎょう"},{"part":"PART 4","jp":"客室サービス車","id":"Kendaraan layanan kabin","reading":"きゃくしつさーびすしゃ"},{"part":"PART 4","jp":"後方ドア","id":"Pintu belakang","reading":"こうほうどあ"},{"part":"PART 4","jp":"装着","id":"Pemasangan","reading":"そうちゃく"},{"part":"PART 4","jp":"乗降口","id":"Pintu naik turun","reading":"じょうこうぐち"},{"part":"PART 4","jp":"高さ","id":"Ketinggian","reading":"たかさ"},{"part":"PART 4","jp":"荷室","id":"Ruang bagasi","reading":"にしつ"},{"part":"PART 4","jp":"部分","id":"Bagian","reading":"ぶぶん"},{"part":"PART 4","jp":"上下","id":"Naik turun","reading":"じょうげ"},{"part":"PART 4","jp":"内部","id":"Bagian dalam","reading":"ないぶ"},{"part":"PART 4","jp":"清掃作業員","id":"Pekerja pembersihan","reading":"せいそうさぎょういん"},{"part":"PART 4","jp":"乗車","id":"Naik kendaraan","reading":"じょうしゃ"},{"part":"PART 4","jp":"座席","id":"Kursi","reading":"ざせき"},{"part":"PART 4","jp":"物品","id":"Barang","reading":"ぶっぴん"},{"part":"PART 4","jp":"積載","id":"Muatan","reading":"せきさい"},{"part":"PART 4","jp":"トラッシュ","id":"Sampah","reading":"トラッシュ"},{"part":"PART 4","jp":"カー","id":"Mobil","reading":"カー"},{"part":"PART 4","jp":"トラック","id":"Truk","reading":"トラック"},{"part":"PART 4","jp":"荷台","id":"Bak truk","reading":"にだい"},{"part":"PART 4","jp":"上部","id":"Bagian atas","reading":"じょうぶ"},{"part":"PART 4","jp":"ハッチ","id":"Penutup","reading":"ハッチ"},{"part":"PART 4","jp":"開放","id":"Membuka","reading":"かいほう"},{"part":"PART 4","jp":"状態","id":"Keadaan","reading":"じょうたい"},{"part":"PART 4","jp":"パッセンジャー","id":"Penumpang","reading":"パッセンジャー"},{"part":"PART 4","jp":"ボーディング","id":"Naik ke pesawat","reading":"ボーディング"},{"part":"PART 4","jp":"ブリッジ","id":"Jembatan","reading":"ブリッジ"},{"part":"PART 4","jp":"ゴミ","id":"Sampah","reading":"ゴミ"},{"part":"PART 4","jp":"放り込む","id":"Melemparkan","reading":""},{"part":"PART 4","jp":"タイプ","id":"Tipe","reading":"タイプ"},{"part":"PART 4","jp":"前便","id":"Penerbangan sebelumnya","reading":"ぜんびん"},{"part":"PART 4","jp":"折り返し","id":"Balik arah","reading":"おりかえし"},{"part":"PART 4","jp":"次便","id":"Penerbangan berikutnya","reading":"じびん"},{"part":"PART 4","jp":"清掃場所","id":"Tempat pembersihan","reading":"せいそうばしょ"},{"part":"PART 4","jp":"各シート","id":"Setiap kursi","reading":"かくしーと"},{"part":"PART 4","jp":"ギャレー","id":"Dapur pesawat","reading":"ギャレー"},{"part":"PART 4","jp":"ラバトリー","id":"Kamar mandi pesawat","reading":"らばとりー"},{"part":"PART 4","jp":"客室内","id":"Di dalam kabin","reading":"きゃくしつない"},{"part":"PART 4","jp":"操縦室","id":"Kokpit","reading":"そうじゅうしつ"},{"part":"PART 4","jp":"出入口付近","id":"Area sekitar pintu masuk","reading":"でいりぐちふきん"},{"part":"PART 4","jp":"ポイント","id":"Poin","reading":"ポイント"},{"part":"PART 4","jp":"座席ベルト","id":"Sabuk pengaman kursi","reading":"ざせきべると"},{"part":"PART 4","jp":"八の字型","id":"Bentuk angka delapan","reading":"はちのじがた"},{"part":"PART 4","jp":"一文字型","id":"Bentuk garis lurus","reading":"いちもんじがた"},{"part":"PART 4","jp":"航空会社","id":"Maskapai penerbangan","reading":"こうくうがいしゃ"},{"part":"PART 4","jp":"定めた形","id":"Bentuk yang ditentukan","reading":"さだめたかたち"},{"part":"PART 4","jp":"座席カバー","id":"Penutup kursi","reading":"ざせきかばー"},{"part":"PART 4","jp":"汚損","id":"Kerusakan karena kotoran","reading":"おそん"},{"part":"PART 4","jp":"処置","id":"Penanganan","reading":"しょち"},{"part":"PART 4","jp":"座席ポケット","id":"Saku kursi","reading":"ざせきぽけっと"},{"part":"PART 4","jp":"セット品","id":"Barang-barang set","reading":"せっとひん"},{"part":"PART 4","jp":"機内誌","id":"Majalah dalam pesawat","reading":"きないし"},{"part":"PART 4","jp":"非常脱出案内","id":"Petunjuk darurat evakuasi","reading":"ひじょうだっしゅつあんない"},{"part":"PART 4","jp":"安全のしおり","id":"Kartu keselamatan","reading":"あんぜんのしおり"},{"part":"PART 4","jp":"吐袋","id":"Kantong muntah","reading":"とぶくろ"},{"part":"PART 4","jp":"整える","id":"Merapikan","reading":"ととのえる"},{"part":"PART 4","jp":"交換","id":"Penggantian","reading":"こうかん"},{"part":"PART 4","jp":"点検","id":"Inspeksi","reading":"てんけん"},{"part":"PART 4","jp":"使用済み","id":"Telah digunakan","reading":"しようずみ"},{"part":"PART 4","jp":"イヤホン","id":"Earphone","reading":"イヤホン"},{"part":"PART 4","jp":"ヘッドホン","id":"Headphone","reading":"ヘッドホン"},{"part":"PART 4","jp":"肘掛け","id":"Sandaran tangan","reading":"ひじかけ"},{"part":"PART 4","jp":"サイドパネル","id":"Panel samping","reading":"サイドパネル"},{"part":"PART 4","jp":"窓ガラス","id":"Kaca jendela","reading":"まどがらす"},{"part":"PART 4","jp":"テーブル","id":"Meja","reading":"テーブル"},{"part":"PART 4","jp":"拭き取る","id":"Mengelap","reading":"ふきとる"},{"part":"PART 4","jp":"ゴミ箱","id":"Tempat sampah","reading":""},{"part":"PART 4","jp":"取出し","id":"Mengambil","reading":"とりだし"},{"part":"PART 4","jp":"収納","id":"Penyimpanan","reading":"しゅうのう"},{"part":"PART 4","jp":"ドア","id":"Pintu","reading":"ドア"},{"part":"PART 4","jp":"確実","id":"Pasti","reading":"かくじつ"},{"part":"PART 4","jp":"カウンター","id":"Meja counter","reading":"カウンター"},{"part":"PART 4","jp":"折りたたみ式","id":"Lipat","reading":"おりたたみしき"},{"part":"PART 4","jp":"汚れ","id":"Kotoran","reading":"よごれ"},{"part":"PART 4","jp":"床","id":"Lantai","reading":"ゆか"},{"part":"PART 4","jp":"べたつき","id":"Kelekatan","reading":"べたつき"},{"part":"PART 4","jp":"モップ","id":"Mop","reading":"モップ"},{"part":"PART 4","jp":"ウェス","id":"Kain pembersih","reading":"ウェス"},{"part":"PART 4","jp":"隔壁","id":"Partisi","reading":"かくへき"},{"part":"PART 4","jp":"取っ手","id":"Pegangan","reading":"とって"},{"part":"PART 4","jp":"洗面台","id":"Wastafel","reading":"せんめんだい"},{"part":"PART 4","jp":"鏡","id":"Cermin","reading":"かがみ"},{"part":"PART 4","jp":"便器","id":"Toilet","reading":"べんき"},{"part":"PART 4","jp":"トイレットペーパー","id":"Kertas toilet","reading":"といれっとぺーぱー"},{"part":"PART 4","jp":"流さない","id":"Tidak membuang","reading":"ながさない"},{"part":"PART 4","jp":"収める","id":"Menyimpan","reading":"おさめる"},{"part":"PART 4","jp":"不足","id":"Kekurangan","reading":"ふそく"},{"part":"PART 4","jp":"トイレ用品","id":"Perlengkapan toilet","reading":"といれようひん"},{"part":"PART 4","jp":"補充","id":"Mengisi ulang","reading":"ほじゅう"},{"part":"PART 4","jp":"オーバーヘッド","id":"Overhead","reading":"オーバーヘッド"},{"part":"PART 4","jp":"ストレージ","id":"Penyimpanan","reading":"ストレージ"},{"part":"PART 4","jp":"大きなゴミ","id":"Sampah besar","reading":"おおきなごみ"},{"part":"PART 4","jp":"拾い","id":"Memungut","reading":"ひろい"},{"part":"PART 4","jp":"小さなゴミ","id":"Sampah kecil","reading":"ちいさなごみ"},{"part":"PART 4","jp":"掃除機","id":"Penyedot debu","reading":"そうじき"},{"part":"PART 4","jp":"忘れ物","id":"Barang yang tertinggal","reading":"わすれもの"},{"part":"PART 4","jp":"不審物","id":"Barang mencurigakan","reading":"ふしんぶつ"},{"part":"PART 4","jp":"機材","id":"Peralatan","reading":"きざい"},{"part":"PART 4","jp":"飛行","id":"Penerbangan","reading":"ひこう"},{"part":"PART 4","jp":"終了","id":"Selesai","reading":"しゅうりょう"},{"part":"PART 4","jp":"駐機","id":"Parkir pesawat","reading":"ちゅうき"},{"part":"PART 4","jp":"準じて","id":"Sesuai","reading":"じゅんじて"},{"part":"PART 4","jp":"基本的","id":"Dasar","reading":"きほんてき"},{"part":"PART 4","jp":"同様","id":"Sama","reading":"どうよう"},{"part":"PART 4","jp":"時間","id":"Waktu","reading":"じかん"},{"part":"PART 4","jp":"汚れている","id":"Kotor","reading":"よごれている"},{"part":"PART 4","jp":"全体","id":"Seluruh","reading":"ぜんたい"},{"part":"PART 4","jp":"指示","id":"Instruksi","reading":"しじ"},{"part":"PART 4","jp":"消毒液","id":"Cairan disinfektan","reading":"しょうどくえき"},{"part":"PART 4","jp":"出発便","id":"Penerbangan keberangkatan","reading":"しゅっぱつびん"},{"part":"PART 4","jp":"長い","id":"Panjang","reading":"ながい"},{"part":"PART 4","jp":"スケジュール","id":"Jadwal","reading":"スケジュール"},{"part":"PART 4","jp":"飛行後","id":"Setelah penerbangan","reading":"ひこうご"},{"part":"PART 4","jp":"別","id":"Berbeda","reading":""},{"part":"PART 4","jp":"クラス","id":"Kelas","reading":"クラス"},{"part":"PART 4","jp":"ポケットセット品","id":"Barang-barang di saku kursi","reading":"ぽけっとせっとひん"},{"part":"PART 4","jp":"リネン類","id":"Linen","reading":"りねんるい"},{"part":"PART 4","jp":"入れ替え","id":"Penggantian","reading":"いれかえ"},{"part":"PART 4","jp":"量","id":"Jumlah","reading":"りょう"},{"part":"PART 4","jp":"短時間","id":"Waktu singkat","reading":"たんじかん"},{"part":"PART 4","jp":"大人数","id":"Banyak orang","reading":"おおにんずう"},{"part":"PART 4","jp":"必要","id":"Diperlukan","reading":"ひつよう"}];
const $ = id => document.getElementById(id);
const PROFILE_KEY='kotobaProfileV13';
const DEFAULT_PROFILE={name:'Player',xp:0,level:1,coins:0,totalXP:0,totalScore:0,totalAnswered:0,totalCorrect:0,totalWrong:0,bestStreak:0,rounds:0,perfectRounds:0,learned:0,modeStats:{normal:0,learn:0,timeattack:0,hardcore:0,streak:0},rewards:[]};
let profile=loadProfile();
function loadProfile(){try{const p=Object.assign({},DEFAULT_PROFILE,JSON.parse(localStorage.getItem(PROFILE_KEY)||'{}'));p.modeStats=Object.assign({},DEFAULT_PROFILE.modeStats,p.modeStats||{});p.rewards=Array.isArray(p.rewards)?p.rewards:[];return p}catch(e){return {...DEFAULT_PROFILE,modeStats:{...DEFAULT_PROFILE.modeStats},rewards:[]}}}
function saveProfile(){localStorage.setItem(PROFILE_KEY,JSON.stringify(profile));renderProfile()}
function xpNeed(level){return 500+(Math.max(0,level-1)*250)}
function applyXP(amount){let gained=Math.max(0,Math.round(amount)),levels=[];profile.totalXP+=gained;profile.xp+=gained;while(profile.xp>=xpNeed(profile.level)){profile.xp-=xpNeed(profile.level);profile.level++;profile.coins+=50;levels.push(profile.level);profile.rewards.push('Level '+profile.level+': +50 🪙')}return levels}
function modeConfig(){const m=$('gameMode')?.value||'normal';return {normal:{name:'Normal',time:15,base:100,mult:1,hard:false,learn:false},learn:{name:'Belajar',time:0,base:50,mult:1,hard:false,learn:true},timeattack:{name:'Time Attack',time:8,base:130,mult:1.25,hard:false,learn:false},hardcore:{name:'Hardcore',time:7,base:150,mult:1.5,hard:true,learn:false},streak:{name:'Streak',time:10,base:100,mult:1,hard:false,learn:false}}[$('gameMode')?.value||'normal']}
function renderProfile(){if($('profileName'))$('profileName').value=profile.name||'Player';if($('levelValue'))$('levelValue').textContent=profile.level;if($('xpValue'))$('xpValue').textContent=profile.xp+' / '+xpNeed(profile.level);if($('coinValue'))$('coinValue').textContent=profile.coins;if($('xpBar'))$('xpBar').style.width=Math.min(100,(profile.xp/xpNeed(profile.level))*100)+'%';if($('statRounds'))$('statRounds').textContent=profile.rounds;if($('statAccuracy'))$('statAccuracy').textContent=profile.totalAnswered?Math.round(profile.totalCorrect/profile.totalAnswered*100)+'%':'0%';if($('statBest'))$('statBest').textContent=profile.bestStreak;if($('statXP'))$('statXP').textContent=profile.totalXP}
function setProfileName(){const v=($('profileName')?.value||'Player').trim().slice(0,24);profile.name=v||'Player';saveProfile()}
const state={score:0,streak:0,index:0,answered:false,timer:15,deck:[],correct:null,roundSize:10,correctAnswers:0,wrongAnswers:0,roundXP:0,roundCoins:0,mode:'normal',perfect:false};
let interval=null;
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function rubyText(jp,reading){if(!reading||!/[\u4e00-\u9fff]/.test(jp))return jp;return `<ruby>${jp}<rt>${reading}</rt></ruby>`}
function pool(){const p=$('part').value;return ALL.filter(x=>p==='ALL'||x.part===p)}
function getRoundSize(){const v=$('roundSize')?.value||'10';return v==='ALL'?pool().length:Number(v)}
function startGame(){clearInterval(interval);$('game').style.display='block';$('result').style.display='none';const cfg=modeConfig();state.score=0;state.streak=0;state.index=0;state.correctAnswers=0;state.wrongAnswers=0;state.roundXP=0;state.roundCoins=0;state.mode=$('gameMode')?.value||'normal';state.perfect=false;state.roundSize=getRoundSize();let p=pool();state.deck=shuffle(p).slice(0,state.roundSize);state.answered=false;$('score').textContent=0;$('streak').textContent=0;$('qnum').textContent='1/'+state.roundSize;$('modeBadge')&&($('modeBadge').textContent=cfg.name);showQuestion();saveProfile()}
function showQuestion(){clearInterval(interval);state.answered=false;$('next').disabled=true;const item=state.deck[state.index],mode=$('mode').value,cfg=modeConfig();$('qnum').textContent=(state.index+1)+'/'+state.roundSize;$('bar').style.width=(state.index/state.roundSize*100)+'%';if(mode==='jp-id'){$('label').textContent=cfg.learn?'Pelajari arti kotoba ini':'Apa arti kotoba ini?';$('word').innerHTML=rubyText(item.jp,item.reading);$('hint').textContent=cfg.learn?'Baca furigana dan pilih arti yang tepat.':item.part;state.correct=item.id;let opts=shuffle([item.id,...shuffle(pool().filter(x=>x.id!==item.id)).slice(0,3).map(x=>x.id)]);renderAnswers(opts)}else{$('label').textContent=cfg.learn?'Pelajari kotoba Jepangnya':'Kotoba Jepangnya yang mana?';$('word').textContent=item.id;$('hint').textContent=cfg.learn?'Pilih kata Jepang yang sesuai.':item.part;state.correct=item.jp;let opts=shuffle([item.jp,...shuffle(pool().filter(x=>x.jp!==item.jp)).slice(0,3).map(x=>x.jp)]);renderAnswers(opts)}state.timer=cfg.time;$('timer').textContent=cfg.time?cfg.time:'∞';if(cfg.time){interval=setInterval(()=>{state.timer--;$('timer').textContent=state.timer;if(state.timer<=0){clearInterval(interval);if(!state.answered){state.answered=true;state.wrongAnswers++;profile.totalWrong++;profile.totalAnswered++;saveProfile();}lock(false,'Waktu habis ⏰');if(state.mode==='streak')finish()}},1000)}}
function renderAnswers(opts){$('answers').innerHTML='';opts.forEach(o=>{const b=document.createElement('button');b.className='answer';b.textContent=o;b.onclick=()=>choose(b,o);$('answers').appendChild(b)})}
function choose(btn,val){if(state.answered)return;clearInterval(interval);state.answered=true;const ok=val===state.correct,cfg=modeConfig();lock(ok,ok?'Benar! 🎉':'Kurang tepat 😅');if(ok){state.correctAnswers++;profile.totalCorrect++;profile.totalAnswered++;state.streak++;profile.bestStreak=Math.max(profile.bestStreak,state.streak);let base=cfg.base+Math.min(Math.max(0,state.streak-1)*10,50);let speed=cfg.time?Math.max(0,state.timer)*5:0;let pts=Math.round((base+speed)*cfg.mult);state.score+=pts;state.roundXP+=pts;state.roundCoins+=state.streak>=5?2:1}else{state.wrongAnswers++;profile.totalWrong++;profile.totalAnswered++;state.streak=0} $('score').textContent=state.score;$('streak').textContent=state.streak;saveProfile();try{ok?correctSound():wrongSound()}catch(e){}if(!ok&&state.mode==='hardcore'){state.index=state.roundSize;setTimeout(finish,450)}}
function lock(ok,msg){[...$('answers').children].forEach(b=>{b.disabled=true;if(b.textContent===state.correct)b.classList.add('correct')});if(!ok)[...$('answers').children].find(b=>b.textContent===state.correct)?.classList.add('correct');$('hint').textContent=msg+'  Jawaban: '+state.correct;$('next').disabled=false}
$('next').onclick=()=>{state.index++;if(state.index>=state.roundSize)finish();else showQuestion()};$('part').onchange=startGame;$('mode').onchange=startGame;$('roundSize')?.addEventListener('change',startGame);$('gameMode')?.addEventListener('change',startGame);$('saveProfile')?.addEventListener('click',setProfileName);
function showLevelUps(levels){if(!levels.length)return;const last=levels[levels.length-1];$('levelUpTitle').textContent='LEVEL UP! 🎉';$('levelUpText').textContent=`Selamat ${profile.name}! Kamu mencapai Level ${last}.`;$('levelUpReward').textContent='🎁 Hadiah: +50 🪙 Coin setiap level naik';$('levelUp').hidden=false}
function finish(){clearInterval(interval);$('game').style.display='none';$('result').style.display='block';const attempted=state.correctAnswers+state.wrongAnswers;const pct=attempted?Math.round(state.correctAnswers/attempted*100):0;state.perfect=attempted===state.roundSize&&state.correctAnswers===state.roundSize;const cfg=modeConfig();let bonusXP=100,bonusCoins=20;if(state.perfect){bonusXP+=250;bonusCoins+=50;profile.perfectRounds++}if(state.mode==='learn')bonusXP=50;state.roundXP+=bonusXP;state.roundCoins+=bonusCoins;const levels=applyXP(state.roundXP);profile.coins+=state.roundCoins;profile.totalScore+=state.score;profile.rounds++;profile.modeStats[state.mode]=(profile.modeStats[state.mode]||0)+1;profile.learned+=state.mode==='learn'?state.correctAnswers:0;saveProfile();$('finalScore').textContent=state.score;$('finalText').innerHTML=`<div class="result-grid"><div>🎯 Akurasi <b>${pct}%</b></div><div>✅ Benar <b>${state.correctAnswers}/${attempted}</b></div><div>❌ Salah <b>${state.wrongAnswers}</b></div><div>⭐ XP ronde <b>+${state.roundXP}</b></div><div>🪙 Coin <b>+${state.roundCoins}</b></div><div>🔥 Streak terbaik <b>${profile.bestStreak}</b></div></div><p>${state.perfect?'🏆 PERFECT ROUND! Bonus +250 XP +50 🪙':'Terus latihan untuk mendapatkan perfect round!'}</p>`;if($('modeBadge'))$('modeBadge').textContent=cfg.name+' • Selesai';try{finishSound()}catch(e){}setTimeout(()=>showLevelUps(levels),250)}
function closeLevelUp(){$('levelUp').hidden=true;renderProfile()}
function resetProgress(){if(!confirm('Hapus semua XP, level, coin dan statistik?'))return;profile={...DEFAULT_PROFILE};saveProfile();renderProfile()}
function updateStatsPanel(){renderProfile();if($('statPerfect'))$('statPerfect').textContent=profile.perfectRounds;if($('statScore'))$('statScore').textContent=profile.totalScore;if($('statLearn'))$('statLearn').textContent=profile.modeStats.learn||0;if($('statTime'))$('statTime').textContent=profile.modeStats.timeattack||0;if($('statHard'))$('statHard').textContent=profile.modeStats.hardcore||0;if($('statStreak'))$('statStreak').textContent=profile.modeStats.streak||0}
document.addEventListener('DOMContentLoaded',()=>{renderProfile();updateStatsPanel();$('profileName')?.addEventListener('change',setProfileName);$('levelUpClose')?.addEventListener('click',closeLevelUp);$('resetProgress')?.addEventListener('click',resetProgress)});
startGame();

const MUSIC_TRACKS = [{"title": "silly cat", "src": "music/track-01.mp3"}, {"title": "Capital Cities - Safe And Sound", "src": "music/track-02.mp3"}, {"title": "boba date cute background music (royalty free)", "src": "music/track-03.mp3"}, {"title": "ANRI - I Can't Stop The Loneliness", "src": "music/track-04.mp3"}, {"title": "アリスダンス,グリーンスクリーン", "src": "music/track-05.mp3"}, {"title": "Wii Music - Gaming Background Music (HD)", "src": "music/track-06.mp3"}, {"title": "SpongeBob SquarePants Production Music - Botany Bay (b)", "src": "music/track-07.mp3"}, {"title": "Spongebob Squarepants Ending Theme Song.", "src": "music/track-08.mp3"}, {"title": "SpongeBob Production Music You're Nice", "src": "music/track-09.mp3"}, {"title": "SpongeBob Production Music Twelfth Street Rag", "src": "music/track-10.mp3"}, {"title": "SpongeBob Production Music The Rakehornpipe", "src": "music/track-11.mp3"}, {"title": "SpongeBob Production Music Hello Blues", "src": "music/track-12.mp3"}, {"title": "Spongebob Music - Background Music (HD)", "src": "music/track-13.mp3"}, {"title": "Sneaky Snitch (Kevin MacLeod) - Background Music (HD)", "src": "music/track-14.mp3"}];;
let currentTrack = 0;
let musicOn = true;
let sfxOn = true;
let bgAudio = new Audio();
bgAudio.volume = 0.22;
bgAudio.preload = "auto";

function loadTrack(i, autoplay=false){
  currentTrack=(i+MUSIC_TRACKS.length)%MUSIC_TRACKS.length;
  bgAudio.src=MUSIC_TRACKS[currentTrack].src;
  bgAudio.load();
  const name=document.getElementById("trackName");
  if(name) name.textContent=MUSIC_TRACKS[currentTrack].title;
  if(autoplay && musicOn) bgAudio.play().catch(()=>{});
}
bgAudio.addEventListener("ended",()=>loadTrack(currentTrack+1,true));

let audioCtx=null;
function initAudio(){
  if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)();
  if(audioCtx.state==="suspended") audioCtx.resume();
}
function tone(freq,duration=.1,type="sine",volume=.035){
  if(!sfxOn)return;
  initAudio();
  const o=audioCtx.createOscillator(),g=audioCtx.createGain();
  o.type=type;o.frequency.value=freq;
  g.gain.setValueAtTime(volume,audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+duration);
  o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+duration+.02);
}
function correctSound(){tone(660,.1);setTimeout(()=>tone(880,.16),80)}
function wrongSound(){tone(220,.14,"sawtooth");setTimeout(()=>tone(165,.2,"sawtooth"),100)}
function clickSound(){tone(440,.045,"triangle",.02)}
function finishSound(){tone(523,.12);setTimeout(()=>tone(659,.12),120);setTimeout(()=>tone(784,.25),240)}

function addMusicUI(){
  if(document.getElementById("cozyMusic"))return;
  const box=document.createElement("div");
  box.id="cozyMusic";
  box.innerHTML=`<div class="musicTitle">🎧 Cozy Playlist <button id="musicHide" title="Sembunyikan">✕</button></div>
    <div class="musicRow"><button id="prevTrack">⏮</button><button id="playTrack">▶️</button><button id="nextTrack">⏭</button>
    <button id="musicToggle">🎵 ON</button></div><div id="trackName"></div>`;
  document.body.appendChild(box);
  const burger=document.createElement("button");
  burger.id="musicBurger";
  burger.type="button";
  burger.innerHTML='<span class="burgerIcon"><span></span><span></span><span></span></span>';
  burger.title="Tampilkan music bar";
  document.body.appendChild(burger);
  document.getElementById("musicHide").onclick=()=>{
    box.classList.remove("music-opening");
    box.classList.add("music-closing");
    setTimeout(()=>{
      box.classList.add("collapsed");
      box.classList.remove("music-closing");
      burger.style.display="flex";
    },360);
  };
  burger.onclick=()=>{
    burger.style.display="none";
    box.classList.remove("collapsed","music-closing");
    // Force reflow so the opening animation always plays.
    void box.offsetWidth;
    box.classList.add("music-opening");
    setTimeout(()=>box.classList.remove("music-opening"),420);
  };
  document.getElementById("playTrack").onclick=()=>{
    initAudio();
    if(bgAudio.paused){bgAudio.play().catch(()=>{});document.getElementById("playTrack").textContent="⏸️";}
    else{bgAudio.pause();document.getElementById("playTrack").textContent="▶️";}
  };
  document.getElementById("prevTrack").onclick=()=>{initAudio();loadTrack(currentTrack-1,true)};
  document.getElementById("nextTrack").onclick=()=>{initAudio();loadTrack(currentTrack+1,true)};
  document.getElementById("musicToggle").onclick=()=>{
    musicOn=!musicOn;
    if(musicOn){initAudio();bgAudio.play().catch(()=>{});}
    else bgAudio.pause();
    document.getElementById("musicToggle").textContent=musicOn?"🎵 ON":"🔇 OFF";
  };
  loadTrack(0,false);
}
document.addEventListener("DOMContentLoaded",addMusicUI);
document.addEventListener("click",e=>{
  const b=e.target.closest("button");
  if(b && !b.closest("#cozyMusic")) clickSound();
},true);

(function(){
  function addThemeToggle(){
    if(document.getElementById("themeToggle")) return;
    const btn=document.createElement("button");
    btn.id="themeToggle";
    btn.type="button";
    btn.setAttribute("aria-label","Ubah tema terang atau gelap");
    btn.textContent=document.body.classList.contains("dark-mode")?"☀️":"🌙";
    document.body.appendChild(btn);

    btn.onclick=function(){
      document.body.classList.toggle("dark-mode");
      const dark=document.body.classList.contains("dark-mode");
      btn.textContent=dark?"☀️":"🌙";
      localStorage.setItem("cozyTheme",dark?"dark":"light");
    };
    if(localStorage.getItem("cozyTheme")==="dark"){
      document.body.classList.add("dark-mode");
      btn.textContent="☀️";
    }
  }
  document.addEventListener("DOMContentLoaded",addThemeToggle);
})();

/* =========================================================
   KOTOBA V1.4 — SUBTLE IMMERSIVE EFFECTS
   Semua efek bersifat tambahan dan tidak mengganti sistem game.
   ========================================================= */
(function(){
  const reduced=window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduced)return;

  function spawnParticles(x,y,count=10){
    for(let i=0;i<count;i++){
      const p=document.createElement("span");
      p.className="immersive-particle";
      p.style.left=x+"px";p.style.top=y+"px";
      p.style.setProperty("--dx",((Math.random()-.5)*150)+"px");
      p.style.setProperty("--dy",(-25-Math.random()*100)+"px");
      p.style.animationDelay=(Math.random()*.08)+"s";
      document.body.appendChild(p);
      setTimeout(()=>p.remove(),900);
    }
  }

  function popText(text,x,y,cls="xp-float"){
    const el=document.createElement("div");
    el.className=cls;el.textContent=text;
    el.style.left=x+"px";el.style.top=y+"px";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),1000);
  }

  function centerOf(el){
    if(!el)return{x:innerWidth/2,y:innerHeight*.5};
    const r=el.getBoundingClientRect();
    return{x:r.left+r.width/2,y:r.top+r.height/2};
  }

  // Re-trigger the question/word entrance without changing markup.
  function animateQuestion(){
    const q=document.querySelector(".question"),w=document.getElementById("word");
    if(q){q.classList.remove("question");void q.offsetWidth;q.classList.add("question")}
    if(w){w.classList.remove("word-focus");void w.offsetWidth;w.classList.add("word-focus")}
  }

  // Hook into answer buttons after each question is rendered.
  const observer=new MutationObserver(()=>{
    document.querySelectorAll(".answer").forEach(btn=>{
      if(btn.dataset.immersiveBound)return;
      btn.dataset.immersiveBound="1";
      btn.addEventListener("click",()=>{
        const pos=centerOf(btn);
        setTimeout(()=>{
          const good=btn.classList.contains("correct");
          document.body.classList.remove("answer-good","answer-bad");
          void document.body.offsetWidth;
          document.body.classList.add(good?"answer-good":"answer-bad");
          setTimeout(()=>document.body.classList.remove("answer-good","answer-bad"),450);
          if(good){
            const streak=Number(document.getElementById("streak")?.textContent||0);
            popText(streak>=2?`🔥 Streak ${streak}`:"+ XP",pos.x,pos.y-15,streak>=2?"combo-pop":"xp-float");
            spawnParticles(pos.x,pos.y,streak>=3?14:8);
          }
        },30);
      });
    });
  });
  observer.observe(document.body,{subtree:true,childList:true});

  document.getElementById("next")?.addEventListener("click",()=>setTimeout(animateQuestion,30));

  const timer=document.getElementById("timer");
  if(timer){
    const tick=new MutationObserver(()=>{
      const n=parseInt(timer.textContent,10);
      timer.classList.toggle("timer-warning",Number.isFinite(n)&&n<=5&&n>0);
    });
    tick.observe(timer,{childList:true,characterData:true,subtree:true});
  }

  // Add a modest level-up particle burst.
  const levelModal=document.getElementById("levelUp");
  if(levelModal){
    const mo=new MutationObserver(()=>{
      if(!levelModal.hidden){
        const r=levelModal.getBoundingClientRect();
        spawnParticles(r.left+r.width/2,r.top+r.height*.35,24);
      }
    });
    mo.observe(levelModal,{attributes:true,attributeFilter:["hidden"]});
  }

  animateQuestion();
})();
