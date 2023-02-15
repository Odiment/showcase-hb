import { Download, Features, SectionWrapper} from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Marka Takip Mobil Uygulaması"
        description="Dilediğiniz marka portföyünü cep telefonunuzda pratik bir biçimde görüntüleyebilir, 
        yayınlanan portföy başvurularını aktif bir biçimde takip edebilir ve 
        durumları hakkındaki gelişmelerden haberdar olabilirsiniz."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"      
      />
      <SectionWrapper 
        title="Kullanıcı Dostu bir Arayüz"
        description="Firma bazlı rahatça erişilebilir kartlar vasıtasıyla markaları listeleyebilir ve 
        dilediğiniz markaya dokunaarak detaylarına cep telefonunzudan ulaşabilirsiniz."
        // showBtn
        mockupImg={assets.homeCards}
        // banner="banner"
        reverse      
      />
      <Features />
      <SectionWrapper 
        title="Sadelik"
        description="Yalnızca istediğiniz detayların ön plana çıktığı minimalist arayüzler.
        İstediğiniz bilgiye üç sade arayüzle modern arayüzler vasıtasıyla hızlı erişim sağlayın."
        //showBtn
        mockupImg={assets.homeHero}
        //banner="banner"
        reverse
      />
      <SectionWrapper 
        title="Detay"
        description="Karmaşadan uzak tüm detaylar elinizin altında.
        Marka başvurularının mevcut durumunu bir bakışta öğrenin.
        Sürece ilişkin detaylara ise pratik bir biçimde erişim sağlayın."
        // showBtn
        mockupImg={assets.homeCards}
        banner="banner02"   
      />
      <Download />
      <div className="px-4 py-2  items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`} >Yalın Patent®</p>
        <p className={`${styles.pText} ${styles.whiteText}`} >Fikirden Değere® : Fikirlerinizin Değerlere dönüşmesinde tecrübe, bilgi ve teknolojinin gücü.       
        </p>
      </div>
    </> 
    );
}
export default App;
