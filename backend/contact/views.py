from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMessage
from django.conf import settings
from .models import Contact

@api_view(['POST'])
def contact_view(request):
    """
    Handle contact form submissions:
    - Validate required fields
    - Save message to the database
    - Send email notification via Gmail SMTP
    """
    data = request.data
    name = (data.get('name') or "").strip()
    email = (data.get('email') or "").strip()
    subject = (data.get('subject') or "No subject").strip()
    message = (data.get('message') or "").strip()

    # Validate required fields
    if not name or not email or not message:
        return Response(
            {"error": "Name, email, and message are required."},
            status=status.HTTP_400_BAD_REQUEST
        )

    # Save to database
    contact = Contact.objects.create(
        name=name,
        email=email,
        subject=subject,
        message=message
    )

    # Send email
    try:
        mail = EmailMessage(
            subject=f" New Contact: {name} — {subject}",
            body=f"Message:\n{message}\n\nFrom: {name} <{email}>",
            from_email=settings.EMAIL_HOST_USER,
            to=[settings.EMAIL_HOST_USER],
            headers={"Reply-To": email},
        )
        mail.send(fail_silently=False)
    except Exception as e:
        return Response(
            {"error": f"Email failed: {str(e)}"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

    return Response(
        {"success": "Message saved and email sent!", "id": contact.id},
        status=status.HTTP_201_CREATED
    )
