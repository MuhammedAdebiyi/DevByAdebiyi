# backend/solutions/models.py
from django.db import models

CATEGORY_CHOICES = [
    ('website-landing', 'website-landing'),
    ('product-design', 'Product Design'),
    ('custom-software', 'Custom Software'),
    ('process-automation', 'Process Automation'),
    ('web-apps', 'Web Apps'),
    ('it-consulting', 'IT Consulting'),
    ('graphics-design', 'Graphics Design')
]

class Solution(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)
    image = models.ImageField(upload_to='solutions/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
