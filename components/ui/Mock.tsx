import { Bell, TrendingUp, Code2, Calculator, LayoutDashboard, BookOpen, Users, Settings } from "lucide-react";

const Mock = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="relative bg-white rounded-[36px] shadow-shadow-heavy border-[8px] border-navy-950 overflow-hidden w-full max-w-[280px] transition-transform hover:-translate-y-2 duration-500 ease-out">
        {/* Dynamic Island */}
        <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-20">
          <div className="w-20 h-5 bg-navy-950 rounded-b-[12px] relative">
            <div className="absolute top-1.5 right-3 w-1 h-1 bg-emerald-500 rounded-full"></div>
          </div>
        </div>

        {/* App Header */}
        <div className="bg-navy-900 pt-9 pb-5 px-5 relative overflow-hidden">
          <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-brand-orange/30 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-center mb-4 relative z-10">
            <div>
              <p className="text-white/50 text-[9px] font-bold uppercase tracking-widest mb-0.5">
                Welcome back,
              </p>
              <p className="text-white font-cabinet font-bold text-lg leading-tight">
                AnonX Academy
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
              <Bell className="w-4 h-4" />
            </div>
          </div>

          {/* Revenue Stats Card */}
          <div className="bg-white rounded-xl p-4 shadow-lg relative z-10">
            <p className="text-navy-400 text-[9px] font-bold tracking-wider uppercase mb-0.5">
              Total Revenue (This Month)
            </p>
            <h3 className="text-2xl font-cabinet font-extrabold text-navy-950">
              ₹1,45,000
            </h3>
            <div className="flex items-center gap-1 mt-1 text-[9px] font-bold text-emerald-600">
              <TrendingUp className="w-3 h-3" />
              <span>+12.5% from last month</span>
            </div>
          </div>
        </div>

        {/* App Body */}
        <div className="p-4 bg-gray-50 h-[290px]">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-navy-900 text-sm">
              Active Courses
            </h4>
            <span className="text-[10px] text-brand-orange font-bold">
              View All
            </span>
          </div>

          {/* Course 1 */}
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 mb-2.5 flex gap-3 items-center">
            <div className="w-11 h-11 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
              <Code2 className="w-5 h-5 text-navy-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-xs font-bold text-navy-900 leading-tight mb-1">
                Advanced Python Masterclass
              </h5>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-navy-400">
                  244 Students
                </span>
                <span className="text-[10px] font-bold text-brand-orange">
                  ₹2,999
                </span>
              </div>
              <div className="w-full bg-orange-100 rounded-full h-0.5 mt-1.5">
                <div
                  className="bg-brand-orange h-0.5 rounded-full"
                  style={{ width: "72%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 mb-2.5 flex gap-3 items-center">
            <div className="w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
              <Calculator className="w-5 h-5 text-indigo-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-xs font-bold text-navy-900 leading-tight mb-1">
                UPSC Math Optional
              </h5>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-navy-400">
                  1,120 Students
                </span>
                <span className="text-[10px] font-bold text-brand-orange">
                  ₹5,499
                </span>
              </div>
              <div className="w-full bg-indigo-100 rounded-full h-0.5 mt-1.5">
                <div
                  className="bg-indigo-500 h-0.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="absolute bottom-0 inset-x-0 h-14 bg-white border-t border-gray-100 flex justify-around items-center px-5 pb-2 z-20">
          <div className="flex flex-col items-center gap-0.5 text-brand-orange">
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-[8px] font-bold">Home</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-navy-300">
            <BookOpen className="w-5 h-5" />
            <span className="text-[8px] font-bold text-navy-300">
              Courses
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-navy-300">
            <Users className="w-5 h-5" />
            <span className="text-[8px] font-bold text-navy-300">
              Students
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-navy-300">
            <Settings className="w-5 h-5" />
            <span className="text-[8px] font-bold text-navy-300">
              Settings
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mock;
