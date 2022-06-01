import { url } from '../../api';
import Upload from '../../Components/Cloudinary';
import Layout from '../../Layout';

export const ProfilePage = () => {
  return (
    <Layout>
      <Upload url={url.uploadImageUser} />
    </Layout>
  );
};
