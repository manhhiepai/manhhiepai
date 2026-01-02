import React from 'react';
import { UserProfile, PredictionResult, AppState } from './types';
import { generatePrediction, generateLoverImage } from './services/geminiService';
import { InputSection } from './components/InputSection';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultDisplay } from './components/ResultDisplay';
import { AuthSection } from './components/AuthSection';

const App: React.FC = () => {
  const [state, setState] = React.useState<AppState>(AppState.WELCOME);
  const [prediction, setPrediction] = React.useState<PredictionResult | null>(null);
  const [imageUrl, setImageUrl] = React.useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleStart = () => {
    if (isAuthenticated) {
      setState(AppState.INPUT);
    } else {
      setState(AppState.AUTH);
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setState(AppState.INPUT);
  };

  const handleProfileSubmit = async (profile: UserProfile) => {
    setState(AppState.LOADING);
    try {
      const result = await generatePrediction(profile);
      const img = await generateLoverImage(result.visualPrompt, profile.seeking);
      setPrediction(result);
      setImageUrl(img);
      setState(AppState.RESULT);
    } catch (error) {
      console.error("Critical System Failure:", error);
      alert("Hệ thống Keyempay AI đang trong quá trình bảo trì định kỳ. Vui lòng quay lại sau.");
      setState(AppState.INPUT);
    }
  };

  const handleReset = () => {
    setPrediction(null);
    setImageUrl('');
    setState(AppState.WELCOME);
  };

  return (
    <div className="min-h-screen selection:bg-[#c5a059]/30">
      <header className="p-8 md:p-12 flex justify-between items-center max-w-7xl mx-auto border-b border-white/5 mb-10">
        <div 
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => setState(AppState.WELCOME)}
        >
          <div className="w-10 h-10 border border-[#c5a059] flex items-center justify-center rotate-45">
            <span className="transform -rotate-45 text-xs font-serif gold-gradient">K</span>
          </div>
          <span className="text-3xl font-serif tracking-[0.2em] uppercase gold-gradient">Keyempay</span>
        </div>
        <div className="flex items-center space-x-6">
           {isAuthenticated && (
             <span className="text-[9px] text-[#c5a059] border border-[#c5a059]/30 px-3 py-1 uppercase tracking-widest font-bold">
               Authenticated Session
             </span>
           )}
           <span className="text-[10px] font-medium text-white/30 uppercase tracking-[0.3em] hidden md:block border-l border-white/10 pl-6">
             The Architecture of Destiny
           </span>
        </div>
      </header>

      <main className="container mx-auto px-6">
        {state === AppState.WELCOME && (
          <div className="text-center py-24 space-y-16 animate-in slide-in-from-bottom-12 duration-1000">
            <div className="space-y-4">
               <h1 className="text-8xl md:text-[10rem] font-serif mb-6 leading-tight tracking-tighter gold-gradient italic">
                Manifest <span className="text-white">Soul</span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light tracking-wide">
                  Kiến tạo chân dung tâm giao thông qua thuật toán đa tầng kết nối <span className="text-[#c5a059]">Thần số học</span>, <span className="text-white">Chiêm tinh</span> và <span className="text-[#c5a059]">Nhân trắc học</span>.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto py-12">
              <div className="p-8 border border-white/5 glass text-center space-y-3">
                <span className="text-[#c5a059] font-serif text-3xl">01</span>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white">Số học Pytago</h3>
                <p className="text-[10px] text-white/30 font-light">Phân tích rung động từ chuỗi mã định danh.</p>
              </div>
              <div className="p-8 border border-white/5 glass text-center space-y-3">
                <span className="text-[#c5a059] font-serif text-3xl">02</span>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white">Hợp nhất Tinh tú</h3>
                <p className="text-[10px] text-white/30 font-light">Xác định điểm chạm định mệnh trong vòng tròn 12 cung.</p>
              </div>
              <div className="p-8 border border-white/5 glass text-center space-y-3">
                <span className="text-[#c5a059] font-serif text-3xl">03</span>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white">Năng lượng Nét bút</h3>
                <p className="text-[10px] text-white/30 font-light">Phác họa ngũ quan từ tiềm thức hội họa.</p>
              </div>
            </div>

            <div className="pt-16">
              <button 
                onClick={handleStart}
                className="group relative inline-flex items-center justify-center px-20 py-8 font-bold text-black transition-all duration-500 bg-white rounded-none hover:bg-[#c5a059] focus:outline-none"
              >
                <span className="relative tracking-[0.6em] uppercase text-xs">Bắt đầu quá trình Phân tích</span>
              </button>
            </div>
          </div>
        )}

        {state === AppState.AUTH && <AuthSection onSuccess={handleAuthSuccess} />}
        {state === AppState.INPUT && <InputSection onSubmit={handleProfileSubmit} />}
        {state === AppState.LOADING && <LoadingScreen />}
        {state === AppState.RESULT && prediction && (
          <ResultDisplay 
            prediction={prediction} 
            imageUrl={imageUrl} 
            onReset={handleReset} 
          />
        )}
      </main>

      <footer className="p-24 text-center">
        <div className="h-[1px] w-20 bg-[#c5a059]/20 mx-auto mb-10"></div>
        <p className="text-white/10 text-[9px] uppercase tracking-[0.6em]">
          Keyempay Neural Network • Established MMXXIV • Private Archive
        </p>
      </footer>
    </div>
  );
};

export default App;