class User < ApplicationRecord
    acts_as_token_authenticatable
    has_secure_password
    mount_uploader :photoUser, PhotoUserUploader
end
