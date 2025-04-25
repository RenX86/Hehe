from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_required, current_user
from sqlalchemy import desc, and_, func
from collections import defaultdict
from sqlalchemy.orm import joinedload, load_only
from app import db

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    if current_user.is_authenticated:
        return render_template('main/dashboard.html')
    return render_template('main/home.html')

@bp.route('/dashboard')
@login_required
def dashboard():
    return render_template('main/dashboard.html')


