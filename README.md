# Hehe App v2

A modern Flask web application with user authentication, email verification, and dark mode support.

## Features

- 🔐 User Authentication (Login/Register)
- ✉️ Email Verification System
- 🌓 Dark Mode Support
- 🔒 Secure Password Handling
- 🎨 Modern Bootstrap UI
- 📱 Responsive Design
- 🔄 PostgreSQL Database
- 🚀 Ready for Render Deployment

## Tech Stack

- **Backend**: Flask 2.0.1
- **Database**: PostgreSQL with SQLAlchemy
- **Authentication**: Flask-Login
- **Forms**: Flask-WTF
- **Email**: Flask-Mail
- **Styling**: Bootstrap 5
- **Production Server**: Gunicorn with Gevent

## Prerequisites

- Python 3.9+
- PostgreSQL
- SMTP Server for Email Verification

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Hehe2
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the root directory:
   ```env
   FLASK_APP=run.py
   FLASK_ENV=development
   SECRET_KEY=your-secret-key
   
   # Database
   DATABASE_URL=postgresql://username:password@localhost/dbname
   
   # Email Configuration
   MAIL_SERVER=smtp.example.com
   MAIL_PORT=587
   MAIL_USE_TLS=True
   MAIL_USERNAME=your-email@example.com
   MAIL_PASSWORD=your-email-password
   MAIL_DEFAULT_SENDER=your-email@example.com
   ```

5. Initialize the database:
   ```bash
   flask db upgrade
   ```

## Running Locally

1. Start the development server:
   ```bash
   flask run
   ```

2. Visit `http://localhost:5000` in your browser

## Deployment on Render

This application is configured for deployment on Render.com:

1. Push your code to GitHub
2. Connect your GitHub repository to Render
3. Render will automatically:
   - Create a PostgreSQL database
   - Set up environment variables
   - Deploy your application

Required environment variables will be automatically configured through `render.yaml`.

## Project Structure

```
Hehe2/
├── app/
│   ├── __init__.py
│   ├── models/
│   ├── routes/
│   ├── static/
│   └── templates/
├── migrations/
├── .env
├── config.py
├── gunicorn.conf.py
├── render.yaml
├── requirements.txt
└── run.py
```

## Security Features

- Password hashing with Flask-Bcrypt
- Email verification system
- Input sanitization
- CSRF protection
- Secure session handling
- Environment variable configuration

## Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---
Made with ❤️ using Flask 