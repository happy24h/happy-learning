import './Library.scss';
let data = [
    { minusName: 'Đậu ngự', minus: '---', plusName: 'Gạo trắng', plus: '+' },
    { minusName: 'Đậu lăng ti', minus: '--', plusName: 'Đậu bạt', plus: '+' },
    { minusName: 'Đậu nành', minus: '--', plusName: 'Đậu ván', plus: '+' },
    { minusName: 'Đậu petit–pois', minus: '--', plusName: 'Đậu đen', plus: '+' },
    { minusName: 'Đậu phụng (lạc)', minus: '-', plusName: '	Đậu đỏ', plus: '+' },
    { minusName: 'Đậu xanh', minus: '-', plusName: 'Hạt mít', plus: '+' },
    { minusName: 'Bắp (nếp và tẻ)', minus: '-', plusName: 'Gạo đỏ', plus: '++' },
    { minusName: 'Loại mạch (Rye)', minus: '-', plusName: 'Hạt súng ', plus: '++' },
    { minusName: 'Kiều mạch (Ơast)', minus: '-', plusName: 'Hạt sen', plus: '++' },
    { minusName: 'Bo–bo (Ý–dĩ)', minus: '-', plusName: '', plus: '' },
    { minusName: 'Gạo nếp', minus: '-', plusName: '', plus: '' },
    { minusName: 'Kê (Millet)', minus: '-', plusName: '', plus: '' },
    { minusName: '*Rau trái', minus: '', plusName: '*Rau trái', plus: '' },

    { minusName: 'Thơm,dưa', minus: '---', plusName: 'Rau má', plus: '+' },
    { minusName: 'Cà dái dê', minus: '---', plusName: 'Rau ngổ điết', plus: '+' },
    { minusName: 'Cà chua', minus: '---', plusName: 'Cải cay', plus: '+' },
    { minusName: 'Đậu đủa', minus: '---', plusName: 'Củ cải trắng', plus: '+' },
    { minusName: 'Đậu La-ve-non', minus: '---', plusName: 'Bí dao', plus: '+' },
    { minusName: 'Dưa chuột', minus: '---', plusName: 'Bồ công anh', plus: '+' },
    { minusName: 'Bắp chuối', minus: '---', plusName: 'Cúc tầng ô', plus: '+' },
    { minusName: 'Măng tre', minus: '---', plusName: 'Rau diếp mỡ', plus: '+' },
    { minusName: 'Măng tây', minus: '---', plusName: 'Diếp quấn đắng', plus: '+' },
    { minusName: 'Dưa gan', minus: '---', plusName: 'Su bắp lá quắn', plus: '+' },
    { minusName: 'Giá', minus: '---', plusName: 'Cải ra-đi', plus: '+' },
    { minusName: 'Nấm', minus: '---', plusName: 'Kiệu', plus: '+' },
    { minusName: 'Mồng tơi', minus: '--', plusName: 'hành', plus: '+' },
    { minusName: 'Rau muống', minus: '--', plusName: 'Nén', plus: '+' },
    { minusName: 'Bầu', minus: '--', plusName: 'Hẹ', plus: '+' },
    { minusName: 'Rau mã đề', minus: '-', plusName: 'Rau pec-xin', plus: '+' },
    { minusName: 'Rau dền', minus: '-', plusName: 'Bí đỏ, hạt bí đỏ', plus: '+' },
    { minusName: 'Rau dền', minus: '-', plusName: 'Xà láchson(cresson)', plus: '++' },
    { minusName: 'Rau khoai', minus: '-', plusName: '', plus: '' },
    { minusName: 'Su đỏ', minus: '-', plusName: '', plus: '' },
    { minusName: 'Su hào', minus: '-', plusName: '', plus: '' },
    { minusName: '*Trái cây', minus: '**********', plusName: '*Trái cây', plus: '**********' },
    { minusName: 'Bưởi thanh trà', minus: '---', plusName: 'Quả gất', plus: '+' },
    { minusName: 'Cam, quýt', minus: '---', plusName: 'Trái trứng gà(Ô-ma)', plus: '+' },
    { minusName: 'Chuối', minus: '---', plusName: 'Trái dâu', plus: '+' },
    { minusName: 'Vả mật', minus: '---', plusName: 'Dẻ tây', plus: '+' },
    { minusName: 'Hồng', minus: '---', plusName: 'Anh đào (cherry)', plus: '+' },
    { minusName: 'Sa-pô-chê', minus: '---', plusName: 'Quả pom', plus: '+' },
    { minusName: 'Quả me', minus: '---', plusName: 'Quả táo', plus: '++' },
    { minusName: 'Dưa bở', minus: '---', plusName: '', plus: '' },
    { minusName: 'Vú sữa', minus: '---', plusName: '', plus: '' },
    { minusName: 'Lê, Đào , Mận', minus: '--', plusName: '', plus: '' },
    { minusName: 'Dưa đỏ', minus: '--', plusName: '', plus: '' },
    { minusName: 'Chôm chôm', minus: '--', plusName: '', plus: '' },
    { minusName: 'Nho', minus: '--', plusName: '', plus: '' },
    { minusName: 'Bứa', minus: '--', plusName: '', plus: '' },
    { minusName: 'Mít chín', minus: '--', plusName: '', plus: '' },
    { minusName: 'Vải (lệ-chi)', minus: '--', plusName: '', plus: '' },
    { minusName: 'Chanh', minus: '--', plusName: '', plus: '' },
    { minusName: 'Đào lộn hột', minus: '-', plusName: '', plus: '' },
    { minusName: 'Quả phật thủ', minus: '-', plusName: '', plus: '' },
    { minusName: 'Hạnh nhân', minus: '--', plusName: '', plus: '' },
    { minusName: 'Măng cụt', minus: '-', plusName: '', plus: '' },
    { minusName: 'Nhãn', minus: '-', plusName: '', plus: '' },
    { minusName: 'Mãn cầu', minus: '-', plusName: '', plus: '' },
    { minusName: 'Khế, Lựu', minus: '-', plusName: '', plus: '' },
    { minusName: '*Dầu thảo mộc', minus: '', plusName: '*Dầu thảo mộc', plus: '' },
    { minusName: '', minus: '', plusName: 'Dầu dừa', plus: '++' },
    { minusName: '', minus: '', plusName: 'Dầu lai', plus: '++' },
    { minusName: '', minus: '', plusName: 'Dầu đậu nành', plus: '++' },
    { minusName: '', minus: '', plusName: 'Dầu phụng', plus: '++' },
    { minusName: '', minus: '', plusName: 'Dầu Ô-liu', plus: '+' },
    { minusName: '', minus: '', plusName: 'Dầu hương quỳ', plus: '+' },
    { minusName: '', minus: '', plusName: 'Dầu mè', plus: '+' },
    { minusName: '', minus: '', plusName: 'Dầu Ô-mê-ga', plus: '+' },
    { minusName: '*Gia vị', minus: '', plusName: '*Gia vị', plus: '' },
    { minusName: 'Gừng, ớt', minus: '---', plusName: 'Nghệ', plus: '+' },
    { minusName: 'Tiêu', minus: '--', plusName: 'Quế', plus: '++' },
    { minusName: 'Rau bạc hà', minus: '-', plusName: 'Muối bể', plus: '+++' },
    { minusName: 'Tỏi', minus: '-', plusName: '', plus: '' },
    { minusName: 'Ngò', minus: '-', plusName: '', plus: '' },
    { minusName: '*Thịt', minus: '', plusName: '*Thịt', plus: '' },
    { minusName: 'Bò', minus: '--', plusName: 'Bồ câu', plus: '++' },
    { minusName: 'Heo', minus: '--', plusName: 'Vịt', plus: '+' },
    { minusName: 'Ngựa', minus: '--', plusName: 'Gà tây', plus: '+' },
    { minusName: 'Thỏ', minus: '--', plusName: 'Trứng có trống', plus: '++' },
    { minusName: 'Ếch, nhái', minus: '--', plusName: 'Chim trỉ', plus: '+++' },
    { minusName: 'Cừu', minus: '-', plusName: '', plus: '' },
    { minusName: '*Cá nước ngọt, hải sản', minus: '', plusName: '*Cá nước ngọt, hải sản', plus: '' },
    { minusName: 'Oác bưu', minus: '--', plusName: 'Tôm sú', plus: '+' },
    { minusName: 'Hàu, sò', minus: '-', plusName: 'Cá mòi', plus: '+' },
    { minusName: 'Mực, lươn', minus: '-', plusName: 'Cá trích', plus: '+' },
    { minusName: 'Cá hương, cá hồi', minus: '-', plusName: 'Trứng cá muối', plus: '+++' },
    { minusName: 'Cá lờn bơn', minus: '-', plusName: '', plus: '' },
    { minusName: '*Thức ăn bằng sữa', minus: '', plusName: '*Thức ăn bằng sữa', plus: '' },
    { minusName: 'Sữa chua', minus: '---', plusName: 'Fo-mát Roquefort', plus: '+' },
    { minusName: 'Cờ-rem (Kem)', minus: '---', plusName: 'Fo-mat Hòa-lan', plus: '+' },
    { minusName: 'Cờ rem Fô-mát', minus: '---', plusName: 'Sữa dê', plus: '+' },
    { minusName: 'Bơ', minus: '---', plusName: '', plus: '' },
    { minusName: 'Sữa', minus: '--', plusName: '', plus: '' },
    { minusName: '*Thức uống', minus: '', plusName: '*Thức uống', plus: '' },
    { minusName: 'Trà(nhuộm màu)', minus: '---', plusName: 'Trà trinh nữ', plus: '+' },
    { minusName: 'Cà phê', minus: '---', plusName: 'Trà lá vối', plus: '+' },
    { minusName: 'Cô ca Cô la', minus: '---', plusName: 'Trà lá vằn', plus: '+' },
    { minusName: 'Sô cô la Ca cao', minus: '---', plusName: 'Đồng tiện', plus: '+' },
    { minusName: 'Nước ngọt', minus: '---', plusName: 'Trà gạo lứt rang', plus: '+' },
    { minusName: 'Rượu', minus: '---', plusName: 'Trà lá già(khô trên cây)', plus: '+' },
    { minusName: 'Rượu chát(vang)', minus: '---', plusName: 'Trà diếp quắn', plus: '+' },
    { minusName: 'Champagne', minus: '---', plusName: 'Trà đậu huyết rang', plus: '+' },
    { minusName: 'Rượu đế', minus: '--', plusName: 'Trà lá sen', plus: '+' },
    { minusName: 'Bia', minus: '--', plusName: 'Cà-phê gạo lứt rang', plus: '+' },
    { minusName: 'Nước khoáng, Sô đa', minus: '-', plusName: 'Sữa thảo mộc', plus: '+' },
    { minusName: 'Nước giếng sâu', minus: '-', plusName: 'Trà ngãi cứu', plus: '++' },
    { minusName: 'Trà bạc hà', minus: '-', plusName: 'Cà phê bồ công anh', plus: '++' },
    { minusName: '', minus: '', plusName: 'Trà sâm', plus: '++' },
    { minusName: '*Linh tinh', minus: '', plusName: '*Linh tinh', plus: '' },
    { minusName: 'Mạch nha , đường phèn', minus: '-', plusName: 'Ruốt', plus: '+' },
    { minusName: 'Mật mía', minus: '---', plusName: 'Bơ mè', plus: '+' },
    { minusName: 'Tàu vị yểu', minus: '---', plusName: 'Nước mắm nguyên chất', plus: '+' },
    { minusName: 'Dấm', minus: '---', plusName: 'Tương dậu nành', plus: '+' },
    { minusName: 'Mỡ động vật', minus: '--', plusName: '', plus: '' },
    { minusName: 'Nước đá, Mật ông', minus: '--', plusName: '', plus: '' },
    { minusName: 'Đường hóa học', minus: '---', plusName: '', plus: '' },
];
function Library() {
    return (
        <div className="container-library">
            <h2 className="title">Phân loại thực phẩm âm (-) dương (+)</h2>
            <div>
                Phân loại thực phẩm âm (-) dương (+) (Đi từ ÂM đến DƯƠNG) Âm (-) từ nhiều đến ít, nhiều nhất 3 dấun gang
                (– – –), ít nhất 1 dấu ngang (–) Dương (+) từ it đến nhiều, ít nhất một dấu chử thập (+) nhiều nhất 3
                dấu chử thập (+++)
            </div>
            <div className="text-note">
                Sau đây sẽ phân tích một số thức ăn thường hàng ngày, theo khoa dinh dưỡng trong thuật trương sinh của
                Giáo sư Ohsawa (Theo Zen Dưỡng sinh của Thái khắc Lễ sưu tập):
            </div>
            <table id="customers">
                <tr>
                    <th>Tên thực phẩm</th>
                    <th>Phân loại</th>
                    <th>Tên thực phẩm</th>
                    <th>Phân loại</th>
                </tr>
                {data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.minusName}</td>
                            <td>{item.minus}</td>
                            <td>{item.plusName}</td>
                            <td>{item.plus}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default Library;
