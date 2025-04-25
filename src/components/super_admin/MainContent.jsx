import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { ChevronLeft, ChevronRight, User, ChevronDown } from 'lucide-react';

const MainContent = () => {
  // Stats data
  const stats = [
    { title: 'Total No. of Startup', value: 41, change: '+11.01%', color: 'text-primary' },
    { title: 'Total No. of meetings', value: 21, change: '+11.01%', color: 'text-purple' },
    { title: 'Total No. of Employees', value: 721, change: '+11.01%', color: 'text-success' },
    { title: 'No. of Pending Applications', value: 239, change: '-6.08%', color: 'text-danger' },
  ];

  // Incubation data
  const incubationData = [
    { name: 'Incubation Count', value: 38.6, color: '#4F46E5' },
    { name: 'Incubation Stage', value: 23.5, color: '#22C55E' },
    { name: 'Pending Status', value: 30.8, color: '#3B82F6' },
    { name: 'Other', value: 8.1, color: '#gray' },
  ];

  // Calendar data
  const calendar = {
    month: 'June 2023',
    days: Array.from({ length: 31 }, (_, i) => i + 1),
  };

  return (
    <div className="container py-4  " >
      {/* Stats Cards */}
      <div className="row g-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-muted">{stat.title}</h5>
                <div className="d-flex justify-content-between align-items-baseline">
                  <span className="h3">{stat.value}</span>
                  <span className={`small ${stat.color}`}>{stat.change}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Profile Creation Section */}
      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <div className="mb-4">
            <button className="btn btn-success w-100 d-flex align-items-center justify-content-between">
              <span>Create Profile</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="list-group">
            <ProfileOption icon={<User />} text="Employee Profile" />
            <ProfileOption icon={<User />} text="Mentor Profile" />
            <ProfileOption icon={<User />} text="Admin Profile" />
          </div>
        </div>
      </div>

      {/* Calendar and Incubation Status */}
      <div className="row g-4 mt-4">
        {/* Calendar */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-4">
                <span>{calendar.month}</span>
                <div className="d-flex">
                  <button className="btn btn-link p-1">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="btn btn-link p-1">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="row row-cols-7 text-center">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="col text-muted">{day}</div>
                ))}
                {calendar.days.map(day => (
                  <div key={day} className="col p-2">{day}</div>
                ))}
              </div>
              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex align-items-center">
                  <span className="small">Add time</span>
                  <div className="form-check form-switch ms-2">
                    <input className="form-check-input" type="checkbox" id="add-time-switch" />
                  </div>
                </div>
                <div className="small">09:00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Incubation Status */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Incubation Status</h5>
              <div className="d-flex align-items-center">
                <PieChart width={160} height={160}>
                  <Pie
                    data={incubationData}
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {incubationData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="ms-4">
                  {incubationData.map((item, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                      <div className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: item.color }} />
                      <span className="small ms-2">{item.name} - {item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileOption = ({ icon, text }) => (
  <div className="list-group-item d-flex align-items-center">
    <div className="bg-light rounded-circle p-2">
      {icon}
    </div>
    <span className="ms-3">{text}</span>
  </div>
);

export default MainContent;
