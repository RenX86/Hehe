


          
# Hehe - Secure Email Authentication System

## 📋 Overview

Hehe is a modern web application built with Flask that provides secure email authentication and user management. The application supports Gmail and ProtonMail accounts, featuring email verification, user profiles, and a responsive UI with light/dark mode support.

## ✨ Features

- **Secure Authentication**: Email and password-based login system
- **Email Verification**: Verification codes sent to user email
- **Account Management**: User profile and security settings
- **Responsive Design**: Mobile-friendly interface
- **Theme Support**: Light and dark mode
- **Email Provider Restrictions**: Support for Gmail and ProtonMail only

## 📋 Prerequisites

- Python 3.9+
- PostgreSQL (production) or SQLite (development)
- SMTP server for email verification
- Git

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://your-repository-url/hehe.git
   cd hehe
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   Create a `.env` file in the project root with the following variables:
   ```
   SECRET_KEY=your_secret_key
   DATABASE_URL=postgresql://username:password@localhost/hehe
   
   # Email configuration
   MAIL_SERVER=smtp.gmail.com
   MAIL_PORT=587
   MAIL_USE_TLS=True
   MAIL_USERNAME=your_email@gmail.com
   MAIL_PASSWORD=your_app_password
   MAIL_DEFAULT_SENDER=your_email@gmail.com
   
   # Application URL
   BASE_URL=http://localhost:5000
   ```

5. **Initialize the database**
   ```bash
   flask db init
   flask db migrate -m "Initial migration"
   flask db upgrade
   ```

## 🏃‍♂️ Running the Application

### Development
```bash
flask run --debug
```

### Production
```bash
gunicorn -w 4 -b 0.0.0.0:$PORT run:app
```

## 🏗️ Project Structure
```
├── .env                  # Environment variables
├── config.py             # Application configuration
├── Procfile              # Deployment configuration
├── requirements.txt      # Python dependencies
├── run.py                # Application entry point
├── app/                  # Application package
│   ├── __init__.py       # Application factory
│   ├── forms/            # Form definitions
│   ├── models/           # Database models
│   ├── routes/           # Route handlers
│   ├── static/           # Static assets
│   ├── templates/        # HTML templates
│   └── utils/            # Utility functions
└── migrations/           # Database migrations
```

## 🌐 Deployment

### Heroku
1. **Create a Heroku app**
   ```bash
   heroku create your-app-name
   ```

2. **Add PostgreSQL add-on**
   ```bash
   heroku addons:create heroku-postgresql:hobby-dev
   ```

3. **Configure environment variables**
   ```bash
   heroku config:set SECRET_KEY=your_secret_key
   heroku config:set MAIL_SERVER=smtp.gmail.com
   heroku config:set MAIL_PORT=587
   heroku config:set MAIL_USE_TLS=True
   heroku config:set MAIL_USERNAME=your_email@gmail.com
   heroku config:set MAIL_PASSWORD=your_app_password
   heroku config:set MAIL_DEFAULT_SENDER=your_email@gmail.com
   heroku config:set BASE_URL=https://your-app-name.herokuapp.com
   ```

4. **Deploy the application**
   ```bash
   git push heroku main
   ```

5. **Run database migrations**
   ```bash
   heroku run flask db upgrade
   ```

## 🔍 Troubleshooting

### Logs
Check the application logs for detailed error information:

```bash
# In development
flask run --debug

# In production
heroku logs --tail  # If using Heroku
```

### Common Issues

1. **Email verification not working**
   - Check SMTP server settings
   - Ensure app password is correct for Gmail
   - Verify the sender email is authorized

2. **Database connection errors**
   - Check database URL format
   - Ensure PostgreSQL service is running
   - Verify database user permissions

3. **CSS/JS not loading properly**
   - Clear browser cache
   - Check for console errors in browser developer tools
   - Verify static file paths

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers directly.

        Too many current requests. Your queue position is 1. Please wait for a while or switch to other models for a smoother experience.