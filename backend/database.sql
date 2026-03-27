-- WanderPassage Database Schema
-- Run this in phpMyAdmin or MySQL CLI

CREATE DATABASE IF NOT EXISTS wander_passage CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE wander_passage;

-- ─────────────────────────────────────────
--  Users
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username   VARCHAR(100)  NOT NULL,
    email      VARCHAR(255)  NOT NULL UNIQUE,
    password   VARCHAR(255)  NOT NULL,
    role       ENUM('student', 'admin') DEFAULT 'student',
    application_status VARCHAR(50) DEFAULT 'document_submission',
    avatar     VARCHAR(255)  DEFAULT NULL,
    created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ─────────────────────────────────────────
--  Consultation Requests
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS consultation_requests (
    id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    full_name      VARCHAR(150) NOT NULL,
    email          VARCHAR(255) NOT NULL,
    phone          VARCHAR(50)  NOT NULL,
    service        VARCHAR(100) NOT NULL,
    preferred_date DATE         NOT NULL,
    preferred_time TIME         NOT NULL,
    message        TEXT         DEFAULT NULL,
    status         ENUM('new', 'contacted', 'resolved') DEFAULT 'new',
    created_at     TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;


-- ─────────────────────────────────────────
--  Contact Messages
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_messages (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(150)  NOT NULL,
    email      VARCHAR(255)  NOT NULL,
    phone      VARCHAR(50)   DEFAULT NULL,
    subject    VARCHAR(255)  DEFAULT NULL,
    message    TEXT          NOT NULL,
    is_read    TINYINT(1)    DEFAULT 0,
    created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ─────────────────────────────────────────
--  Visa Applications (linked to users)
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS visa_applications (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id      INT UNSIGNED NOT NULL,
    country      VARCHAR(100) NOT NULL,
    visa_type    VARCHAR(100) NOT NULL,
    status       ENUM('draft', 'submitted', 'under_review', 'approved', 'rejected') DEFAULT 'draft',
    notes        TEXT         DEFAULT NULL,
    submitted_at TIMESTAMP    DEFAULT NULL,
    created_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ─────────────────────────────────────────
--  Application Documents (linked to applications)
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS application_documents (
    id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id        INT UNSIGNED NOT NULL,
    doc_key        VARCHAR(100) NOT NULL, -- 'passport', 'cv', etc.
    file_name      VARCHAR(255) NOT NULL,
    file_path      VARCHAR(500) NOT NULL,
    status         ENUM('pending', 'uploaded', 'verified', 'rejected') DEFAULT 'uploaded',
    uploaded_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY (user_id, doc_key),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;
-- ─────────────────────────────────────────
--  Blogs
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blogs (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    author_id    INT UNSIGNED NOT NULL,
    title        VARCHAR(255) NOT NULL,
    slug         VARCHAR(255) NOT NULL UNIQUE,
    excerpt      TEXT         DEFAULT NULL,
    content      LONGTEXT     NOT NULL,
    image_path   VARCHAR(500) DEFAULT NULL,
    status       ENUM('draft', 'published') DEFAULT 'draft',
    created_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

