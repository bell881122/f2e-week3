import React from 'react';
// MUI
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import 'src/_global.scss'
// Custom
import Selector from 'src/components/Selector';
import { getCities } from 'src/service/getData'
//-------------------
function App() {

  React.useEffect(() => {
    getCities();
  }, [getCities]);

  return (
    <div>
      <Box display="flex" mb={1}>
        <Selector />
        <Selector />
      </Box>




      <Box borderRadius={2} boxShadow={3}>
        <Box borderRadius={2} className="bg-primary300" style={{ padding: '16px 32px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }}>
          <h2>307</h2>
        </Box>
        <Box className="bg-primary200" display="flex" style={{ padding: '8px 0', textAlign: 'center' }}>
          <Box style={{ width: '50%', fontWeight: 'bold' }}>
            往 撫遠街
          </Box>
          <Divider orientation="vertical" style={{ borderColor: '#fff' }} flexItem />
          <Box style={{ width: '50%', fontWeight: 'bold' }}>
            往 板橋
          </Box>
        </Box>
        <Box style={{ padding: '8px 20px' }}>
          <Box display="flex" style={{ padding: '8px 0' }}>
            <Box borderRadius={2} display="flex" className="border-primary400">
              <p className="primary400" style={{ width: '52px', textAlign: 'center', margin: 'auto 0' }}>100分</p>
            </Box>
            <p style={{ margin: 'auto 0 auto 8px', fontWeight: 'bold' }}>中正路口中正路口中正路口中正路口中正路口中正路口中正路口中正路口中正路口中正路口中正路口中正路口中正路口</p>
          </Box>

          <Divider light />
        </Box>
      </Box>
    </div>
  );
}

export default App;