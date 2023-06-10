import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            OCEANS
          </Typography>
          <div>
          OCEANS  là nền tảng thương mại điện tử hàng đầu tại Vinh.Ra mắt năm 2023, nền tảng thương mại OCEANS được xây dựng nhằm cung cấp cho người dùng những trải nghiệm dễ dàng, an toàn và nhanh chóng khi mua sắm trực tuyến thông qua hệ thống hỗ trợ thanh toán và vận hành vững mạnh.
          Chúng tôi có niềm tin mạnh mẽ rằng trải nghiệm mua sắm trực tuyến phải đơn giản, dễ dàng và mang đến cảm xúc vui thích. Niềm tin này truyền cảm hứng và thúc đẩy chúng tôi mỗi ngày tại OCEANS .
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
          Về chúng tôi
          </Typography>
          <Typography mb="30px">Nghề nghiệp</Typography>
          <Typography mb="30px">Cửa hàng của chúng tôi</Typography>
          <Typography mb="30px">Điều khoản và điều kiện</Typography>
          <Typography mb="30px">Chính sách bảo mật</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
          Chăm sóc khách hàng
          </Typography>
          <Typography mb="30px">Trung tâm trợ giúp</Typography>
          <Typography mb="30px">Theo dõi đơn hàng của bạn</Typography>
          <Typography mb="30px">Doanh nghiệp</Typography>
          <Typography mb="30px">Trả lại & Hoàn tiền</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
          Liên hệ chúng tôi
          </Typography>
          <Typography mb="30px">
          19 Nguyen Kiem Street, Vinh City
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: nvchung3570@gmail.com
          </Typography>
          <Typography mb="30px">0336093570</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
