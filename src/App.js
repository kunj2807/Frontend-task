import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function App() {
  const languages=[
    {language:"english",all:"All",images:"Images",video:"Video",news:"News",shopping:"Shopping"},
    {language:"Hindi",all:"सभी",images:"छवियाँ",video:"छवियाँ",news:"समाचार",shopping:"खरीदारी"},
    {language:"Bangali",all:"সমস্ত কিছু",images:"ছবিসমূহ",video:"ভিডিও",news:"সংবাদ",shopping:"কেনাকাটা"},
    {language:"Telugu",all:"ఇమేజ్‌లు",images:"ఇమేజ్‌లు",video:"ఇమేజ్‌లు",news:"వార్తలు",shopping:"షాపింగ్"},
    {language:"Marathi",all:"सर्व",images:"प्रतिमा",video:"व्हिडिओ",news:"बातम्या ",shopping:"खरेदी"},
    {language:"Tamil",all:"எல்லாம்",images:"படங்கள்",video:"வீடியோக்கள்",news:"செய்திகள் ",shopping:"ஷாப்பிங்"},
    {language:"Gujarati",all:"તમામ",images:"છબીઓ",video:"વિડિઓઝ",news:"સમાચાર ",shopping:"ખરીદી"},
    {language:"Kannada",all:"ಎಲ್ಲಾ",images:"ಇಮೇಜ್‌ಗಳು",video:"ವೀಡಿಯೊಗಳು",news:"ಸುದ್ದಿ ",shopping:"ಶಾಪಿಂಗ್"},
    {language:"Malyalam",all:"എല്ലാം",images:"ഇമേജ്",video:"വീഡിയോകൾ",news:"വാർത്ത ",shopping:"ഷോപ്പിങ്ങ്"},
    {language:"Panjabi",all:"ਸਭ",images:"ਚਿੱਤਰ",video:"ਵੀਡੀਓ",news:"ਖ਼ਬਰਾਂ ",shopping:"ਖਰੀਦਦਾਰੀ"},
  ]
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
