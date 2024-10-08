
import { useEffect, useState } from 'react';
import './App.css'
import FooterLinkIcons from './components/FooterLinkIcons'

import SearchInput from './components/ui/SearchInput'
import WelcomeHeader from './components/WelcomeHeader'

import { getCurrentTabUrl, executeScriptInActiveTab } from './components/utils/tabInteraction'

function App() {
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined);
  const [pageInfo, setPageInfo] = useState<any>(null);

  useEffect(() => {
    getCurrentTabUrl((url) => {
      setCurrentUrl(url);
    });

    executeScriptInActiveTab((result) => {
      setPageInfo(result);
    });
  }, []);
  
  
  return (
    <>
  <div>
      <h1>Current URL: {currentUrl}</h1>
      <pre>{JSON.stringify(pageInfo, null, 2)}</pre>
    </div>
      <WelcomeHeader />
   <SearchInput />  

<FooterLinkIcons />
    </>
  )
}

export default App
